import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../global"
import { useNavigate, Link } from "react-router-dom"
import "../Style/PartnerRequest.css"

const PartnerRequests = () => {
  const [requests, setRequest] = useState([])

  const navigate = useNavigate()

  const getRequest = async () => {
    try {
      const response = await axios.get(`${BASE_URL}request/`)
      setRequest(response.data)
    } catch (error) {
      console.error("error getting requests", error)
    }
  }
  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div className="requests-dashboard">
      <h2 className="dashboard-title">Partner Requests</h2>

      <div className="requests-grid">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request._id} className="request-card">
              <div className="request-header">
                <h3>{request.companyName}</h3>
                <span className="status-badge">New</span>
              </div>

              <div className="request-body">
                <p>
                  <strong>Email:</strong> {request.email}
                </p>
                <p>
                  <strong>Phone:</strong> {request.number}
                </p>

                <div className="message-box">
                  <strong>Message:</strong>
                  <p className="request-message">{request.message}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">
            <p>No partner requests found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PartnerRequests
