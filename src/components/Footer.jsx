import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-brand-side'>
          <img
            src='./assets/logo.png'
            alt="Ra'edat"
            className='footer-mini-logo'
          />
          <span className='footer-divider'>|</span>
          <p className='footer-tagline'>
            Empowering the next generation of female leaders.
          </p>
        </div>

        <div className='footer-action-side'>
          <span className='get-app-text'>Get the App</span>
          <img
            src='/assets/appstore.png'
            alt='App Store'
            className='mini-badge'
          />
          <div className='mini-qr-box'>
            <img src='./assets/readatqr.png' alt='QR' />
          </div>
          <a href='#' className='admin-link-tiny'>
            Partner Login
          </a>
        </div>
      </div>

      <div className='footer-legal'>
        <p>© 2026 Ra'edat. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
