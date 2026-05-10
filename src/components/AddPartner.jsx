import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import "../Style/AddPartner.css"

const AddPartner = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [form, setForm] = useState({
    companyName: "",
    number: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", form)
  }

  return (
    <div className="partner-container">
      <div className="experience-card">
        <h2 className="experience-title">Want the full experience?</h2>
        <p className="experience-subtitle">
          Join the conversation and register for events on the Baraha App.
        </p>

        <form onSubmit={handleSubmit} className="partner-form">
          <div className="input-group">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              value={form.companyName}
              required
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              onChange={handleChange}
              value={form.number}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={form.email}
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={form.message}
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
  )
}

export default AddPartner
