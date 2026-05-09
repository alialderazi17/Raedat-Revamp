import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "../Style/Nav.css"
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Toggle at 50px of scrolling
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/partners">Partners</NavLink>
        <NavLink to="/newsletter">Newsletters</NavLink>
      </div>
    </nav>
  )
}

export default Nav
