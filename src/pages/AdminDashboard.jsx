import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../global"
import { useNavigate, Link } from "react-router-dom"
import "../Style/Admindash.css"

const AdminDashboard = () => {
  const [partnerCount, setStaffCount] = useState(0)
  // const [newsletterCount, setNewletterCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    if (role !== "admin") {
      navigate("/login")
    }

    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const partner = await axios.get(`${BASE_URL}auth/partner`)
      // const newsletter = await axios.get(`${BASE_URL}newsletter`)

      setStaffCount(partner.data.length)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="card">
          <h3>Total Partner: {partnerCount}</h3>
          <Link to="/admin/partner">
            <button className="btn">Manage Partner</button>
          </Link>
        </div>
        {/* <div className="card">
          <h3>Total newsletter: {newsletterCount}</h3>
          <Link to="/admin/staff">
            <button className="btn">Manage newsletter</button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default AdminDashboard
