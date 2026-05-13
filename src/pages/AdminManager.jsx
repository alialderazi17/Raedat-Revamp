import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/PartnerManage.css"

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
    window.scrollTo({ top: 0, behavior: "smooth" })
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
      setFormData(initialState)
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } catch (error) {
      console.error(error)
      setMessage("Failed to create Admin.")
    }
  }

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${BASE_URL}auth/${id}`)
  //     setMessage("Admin deleted successfully")
  //     getAdmin()
  //   } catch (error) {
  //     setMessage("Error deleting Admin")
  //   }
  // }

  const triggerDelete = (admin) => {
    navigate("/confirm-delete", {
      state: {
        id: admin._id,
        displayName: admin.fullName,
        deleteUrl: `${BASE_URL}auth/${admin._id}`,
        context: "Admin",
        redirectUrl: "/admin/admin",
      },
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${BASE_URL}auth/${editingId}`, formData)

      setMessage("Admin updated successfully!")
      setEditingId(null)
      setFormData(initialState)
      getAdmin()

      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
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
    <div className="event-manager">
      <h2>Admin Management</h2>
      <h3>{editingId ? "Update Admin Mode" : "Register New Admin"}</h3>
      {message && <p>{message}</p>}
      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input name="role" placeholder="Role" disabled value="Admin" required />

        {!editingId ? (
          <button type="submit">Create Admin</button>
        ) : (
          <div className="btn-container">
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
            <div key={admin._id} className="item-card">
              <p>
                <strong>Name:</strong> {admin.fullName}
              </p>
              <p>
                <strong>Email:</strong> {admin.email}
              </p>
              <p>
                <strong>Role:</strong> {admin.role}
              </p>
              <div className="item-btns">
                <button onClick={() => handleEditInit(admin)}>Edit</button>
                <button onClick={() => triggerDelete(admin)}>Delete</button>
              </div>
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
