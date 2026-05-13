import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/PartnerManage.css"
import { useNavigate  } from "react-router-dom"

const initialState = {
  fullName: "",
  email: "",
  password: "",
  role: "admin",
}

const AdminManager = () => {
  const navigate = useNavigate()

  const [admins, setAdmin] = useState([])
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState(initialState)
  const [editingId, setEditingId] = useState(null)

  const getAdmin = async () => {
    try {
      const response = await axios.get(`${BASE_URL}auth/admin`)
      setAdmin(response.data)
    } catch (error) {
      console.error("error getting admins", error)
    }
  }

  useEffect(() => {
    getAdmin()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleEditInit = (admin) => {
    setEditingId(admin._id)
    setFormData({
      fullName: admin.fullName,
      email: admin.email,
      password: "",
      role: admin.role,
    })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    try {
      await axios.post(`${BASE_URL}auth/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setMessage("Admin created successfully!")
      getAdmin()
    } catch (error) {
      console.error(error)
      setMessage("Failed to create Admin.")
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}auth/${id}`)
      setMessage("Admin deleted successfully")
      getAdmin()
    } catch (error) {
      setMessage("Error deleting Admin")
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${BASE_URL}auth/${editingId}`, formData)

      setMessage("Admin updated successfully!")
      setEditingId(null)
      setFormData(initialState)
      getAdmin()
      
    } catch (error) {
      console.error(error)
      setMessage("Update failed. Check your permissions or fields.")
    }
  }
  const cancelEdit = () => {
    setEditingId(null)
    setFormData(initialState)
    setMessage("")
  }

  return (
    <div className="partner-manager">
      <h2>Admin Management</h2>
      <h3>{editingId ? "Update admin Mode" : "Register New admin"}</h3>

      {message && <p>{message}</p>}

      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        <input
          name="fullName"
          placeholder="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input name="role" placeholder="role" disabled value="Admin" required />

        {!editingId ? (
          <button type="submit">Create admin</button>
        ) : (
          <div>
            <button type="submit">Confirm Update</button>
            <button type="button" onClick={cancelEdit}>
              Cancel Edit
            </button>
          </div>
        )}
      </form>

      <hr />

      <h3>Admin List</h3>
      <div>
        {admins.length > 0 ? (
          admins.map((admin) => (
            <div key={admin._id}>
              <p>Name: {admin.fullName}</p>
              <p>Email: {admin.email}</p>
              <p>Role: {admin.role}</p>

              <button onClick={() => handleEditInit(admin)}>Edit</button>
              <button onClick={() => handleDelete(admin._id)}>Delete</button>

              <hr />
            </div>
          ))
        ) : (
          <p>No admin members found.</p>
        )}
      </div>
    </div>
  )
}

export default AdminManager
