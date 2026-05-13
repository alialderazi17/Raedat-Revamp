import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'
import { useNavigate, Link } from 'react-router-dom'
import '../Style/Admindash.css'

const AdminDashboard = ({ setUser }) => {
  const [partnerCount, setPartnerCount] = useState(0)
  const [newsletterCount, setNewletterCount] = useState(0)
  const [adminCount, setAdminCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    if (role !== 'admin') {
      navigate('/auth/login')
    }

    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const partner = await axios.get(`${BASE_URL}auth/partner`)
      const newsletter = await axios.get(`${BASE_URL}newsletter/`)
      const admin = await axios.get(`${BASE_URL}auth/admin`)

      setPartnerCount(partner.data.length)
      setAdminCount(admin.data.length)
      setNewletterCount(newsletter.data.length)
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    setUser(null)
    navigate('/auth/login')
    console.log(setUser)
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <h1 className='dashboard-title'>Admin Dashboard</h1>

        <button onClick={handleLogout} className='logout-btn-dash'>
          Sign Out
        </button>
      </div>

      <div className='stats-grid'>
        <div className='card'>
          <h3>Total Partner: {partnerCount}</h3>
          <Link to='/admin/partner'>
            <button className='btn'>Manage Partner</button>
          </Link>
        </div>
        <div className='card'>
          <h3>Total newsletter: {newsletterCount}</h3>
          <Link to='/admin/newsletter'>
            <button className='btn'>Manage newsletter</button>
          </Link>
        </div>
        <div className='card'>
          <h3>Total Admin: {adminCount}</h3>
          <Link to='/admin/admin'>
            <button className='btn'>Manage Admin</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
