import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import "../Style/AddPartner.css"
import { BASE_URL } from "../global.js"

const initialState = {
  companyName: "",
  number: "",
  email: "",
  message: "",
}

const AddPartner = () => {
  const navigate = useNavigate()

  const [request, setRequest] = useState([])
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}request/`, formData)
      setMessage("Request created successfully!")
      setFormData(initialState)
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } catch (error) {}
  }

  return (
    <div className="partner-container">
      <div
        className="content-wrapper"
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        {message && <p className="success-message">{message}</p>}

        <div className="experience-card">
          <h2 className="experience-title">Want the full experience?</h2>
          <p className="experience-subtitle">
            Join the conversation and register for events on the Baraha App.
          </p>

          <form onSubmit={handleCreate} className="partner-form">
            <div className="input-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
                value={formData.companyName}
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.number}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>

            <div className="button-group">
              <button type="submit" className="btn-primary">
                Submit Now
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => navigate(-1)}
              >
                Partner Portal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPartner
