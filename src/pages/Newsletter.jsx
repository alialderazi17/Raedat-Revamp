import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import '../Style/Newsletter.css'

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([])

  useEffect(() => {
    const getNewsletters = async () => {
      try {
        const response = await axios.get('http://localhost:3000/newsletter')
        setNewsletters(response.data)
      } catch (error) {
        console.error('Error getting newsletters:', error.message)
      }
    }
    getNewsletters()
  }, [])
  return (
    <div className='news-container'>
      <div className='news-hero-section'>
        <img
          src='./assets/news.png'
          alt='Newsletters Hero'
          className='news-hero-image-file'
        />
        <div className='news-hero-overlay'>
          <div className='hero-text'>
            <h1>Welcome to Ra'edat's Newsletters...</h1>
            <p>Bridging our community and the Baraha platform</p>
          </div>
        </div>
      </div>

      <div className='news-content-wrapper'>
        <section className='highlights-intro'>
          <h2>Inside this Issue</h2>
          <p>Stay connected with Ra'edat newsletter updates.</p>
        </section>

        <div className='newsletter-container'>
          <div className='newsletter-grid'>
            {newsletters.map((newsletter) => (
              <Link to={`${newsletter.letterLink}`} key={newsletter._id}>
                <img src={newsletter.coverImage} alt='' />
                <h3>
                  {newsletter.month} {newsletter.year} | Volume{' '}
                  {newsletter.volume} Issue {newsletter.issue}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <div className='app-cta-banner'>
          <h3>Want the full experience?</h3>
          <p>
            Join the conversation and register for events on the Baraha App.
          </p>
          <div className='cta-buttons'>
            <NavLink to='https://apps.apple.com/us/app/raedat/id6742032306'>
              <button className='cta-orange'>Download Now</button>
            </NavLink>
            <button className='cta-outline'>Partner Portal</button>{' '}
            {/* this should have conditional rendering if the user is a partner, let's leave it for now */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
