import { Link, NavLink } from "react-router-dom"
import "../Style/Home.css"

const Home = () => {
  return (
    <div className="subPage-banner">
      <div className="hero-text-container">
        <h1>Unlock your potential with ra'edat</h1>
        <div className="cta-group">
          <NavLink to="https://apps.apple.com/us/app/raedat/id6742032306">
            <button className="join-btn">Join ra’edat</button>
          </NavLink>
          <NavLink to="https://apps.apple.com/us/app/raedat/id6742032306">
            <img
              src="./assets/appstore.png"
              className="store-badge"
              alt="Download on App Store"
            />
          </NavLink>
        </div>
      </div>

      {/* Container 2: The Funnel (QR Code) */}
      <div className="conversion-container">
        <div className="qr-card">
          <img src="./assets/readatqr.png" alt="QR Code" />
          <p>Scan to Join Baraha</p>
        </div>
      </div>
    </div>
  )
}

export default Home
