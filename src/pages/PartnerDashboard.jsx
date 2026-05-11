import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/PartnerDashboard.css"

const PartnerDashboard = () => {
  const [partners, setPartner] = useState([])

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

  return (
    <div className="partner-dash">
      <h3>Partner List</h3>
      <div>
        {partners.length > 0 ? (
          partners.map((partner) => (
            <div key={partner._id}>
              <div className="partner-item">
                <p>
                  <strong>Name:</strong> {partner.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {partner.email}
                </p>
                <div className="role-badge">Role: {partner.role}</div>
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

export default PartnerDashboard
