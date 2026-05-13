import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/EventManager.css"
import emailjs from "@emailjs/browser"

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
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    try {
      // A. First, save to your database
      await axios.post(`${BASE_URL}auth/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const serviceID = "service_xbjc57z"
      const templateID = "template_3wv57bl"
      const publicKey = "xf4OZQHmvt8M3ayNd"

      const templateParams = {
        to_name: formData.fullName,
        to_email: formData.email,
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      setMessage("Partner created and email sent successfully!")
      getPartner()
      setFormData(initialState)
    } catch (error) {
      console.error("Process failed:", error)
      setMessage("Failed to complete registration.")
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
      <h2>Partner Management</h2>
      <h3>{editingId ? "Update Partner Mode" : "Register New Partner"}</h3>

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

        <input
          name="role"
          placeholder="Role"
          disabled
          value="Partner"
          required
        />

        {!editingId ? (
          <button type="submit">Create Partner</button>
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

      <h3>Partner List</h3>
      <div>
        {partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner._id} className="item-card">
              <p>
                <strong>Name:</strong> {partner.fullName}
              </p>
              <p>
                <strong>Email:</strong> {partner.email}
              </p>
              <p>
                <strong>Role:</strong> {partner.role}
              </p>

              <div className="item-btns">
                <button onClick={() => handleEditInit(partner)}>Edit</button>
                <button onClick={() => triggerDelete(partner)}>Delete</button>
              </div>
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
