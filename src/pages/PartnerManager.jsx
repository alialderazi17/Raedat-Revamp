import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/PartnerManage.css"

const initialState = {
  fullName: "",
  email: "",
  password: "",
  role: "partner",
}

const PartnerManager = () => {
  const navigate = useNavigate()
  const [partners, setPartner] = useState([])
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState(initialState)
  const [editingId, setEditingId] = useState(null)

  const getPartner = async () => {
    try {
      const response = await axios.get(`${BASE_URL}auth/partner`)
      setPartner(response.data)
    } catch (error) {
      console.error("error getting partners", error)
    }
  }

  useEffect(() => {
    getPartner()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleEditInit = (partner) => {
    setEditingId(partner._id)
    setFormData({
      fullName: partner.fullName,
      email: partner.email,
      password: "",
      role: partner.role,
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
      setMessage("Partner created successfully!")
      getPartner()
    } catch (error) {
      console.error(error)
      setMessage("Failed to create partner.")
    }
  }

  const triggerDelete = (partner) => {
    navigate("/confirm-delete", {
      state: {
        id: partner._id,
        displayName: partner.fullName,
        deleteUrl: `${BASE_URL}auth/${partner._id}`,
        context: "Partner",
        redirectUrl: "/admin/partner",
      },
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${BASE_URL}auth/${editingId}`, formData)

      setMessage("Partner updated successfully!")
      setEditingId(null)
      setFormData(initialState)
      getPartner()
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
      <h2>Partner Management</h2>
      <h3>{editingId ? "Update partner Mode" : "Register New partner"}</h3>

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

        <input
          name="role"
          placeholder="role"
          disabled
          value="Partner"
          required
        />

        {!editingId ? (
          <button type="submit">Create Partner</button>
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

      <h3>Partner List</h3>
      <div>
        {partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner._id}>
              <p>Name: {partner.fullName}</p>
              <p>Email: {partner.email}</p>
              <p>Role: {partner.role}</p>

              <button onClick={() => handleEditInit(partner)}>Edit</button>
              <button onClick={() => triggerDelete(partner)}>Delete</button>

              <hr />
            </div>
          ))
        ) : (
          <p>No partner members found.</p>
        )}
      </div>
    </div>
  )
}

export default PartnerManager
