import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Style/Nav.css'

const Nav = ({ user, setUser }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    setUser(null)
    navigate('/auth/login')
  }

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className='logo'>
        <img src='/assets/logo.png' alt='Logo' />
      </div>
      <input type='checkbox' id='menu-toggle' />
      <label htmlFor='menu-toggle' className='menu-button'>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/partners'>Partners</NavLink>
        <NavLink to='/newsletter'>Newsletters</NavLink>
        <NavLink to='/community'>Community</NavLink>
        <NavLink to='/event'>Events</NavLink>

        {user && user.role === 'admin' && (
          <NavLink to='/AdminDashboard' className='admin-link'>
            Dashboard
          </NavLink>
        )}

        {user && user.role === 'partner' && (
          <NavLink to='/PartnerDashboard' className='partner-link'>
            Partner List
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav
