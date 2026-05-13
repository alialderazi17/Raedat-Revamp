import React, { useState } from "react"
import "../Style/ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="contact-page">
      {/* Content Layout - Flex container for address and form */}
      <div className="content-container">
        {/* Left Column: Address Section */}
        <div className="address-section">
          <h1 className="company-title">Ra'edat Software Company W.L.L</h1>

          <div className="info-row">
            <img
              src="/public/assets/ContactPage/location.png"
              alt="Location"
              className="icon"
            />
            <p className="address-text">
              Al Badaa Building <br />
              Road 711, Block 207, Bldg 453, Flat 22 <br />
              P.O. Box 3294 <br />
              Muharraq, Bahrain
            </p>
          </div>

          <div className="info-row">
            <img
              src="/public/assets/ContactPage/email.png"
              alt="Email"
              className="icon"
            />
            <p className="email-text">
              Email:{" "}
              <a href="mailto:support@raedat.online" className="contact-link">
                support@raedat.online
              </a>
            </p>
          </div>
        </div>

        {/* Right Column: Form Card with beige background */}
        <div className="form-card">
          <h2 className="get-in-touch">GET IN TOUCH</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="fullName"
              className="styled-input"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="styled-input"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              className="styled-input"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              className="styled-input"
              placeholder="Enter the subject of your message"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              className="styled-textarea"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="form-action">
              <button type="submit" className="send-button">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
