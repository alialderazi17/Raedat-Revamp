import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import '../Style/Newsletter.css'

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const userRole = localStorage.getItem('userRole')

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

  // Filtering Logic
  const filteredNewsletters = newsletters.filter((item) => {
    const monthMatch = selectedMonth === 'All' || item.month === selectedMonth
    const yearMatch =
      selectedYear === 'All' || item.year.toString() === selectedYear
    return monthMatch && yearMatch
  })

  // Get unique years for the dropdown
  const years = [
    'All',
    ...new Set(newsletters.map((item) => item.year.toString())),
  ]
  const months = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div className='news-container'>
      <div className='news-hero-section'>
        <img
          src='/assets/news.png'
          alt='Newsletters Hero'
          className='news-hero-image-file'
        />
        <div className='news-hero-overlay'>
          <div className='hero-text'>
            <h1>Welcome to Ra'edat's Newsletters...</h1>
          </div>
        </div>
      </div>

      <div className='news-content-wrapper'>
        <section className='highlights-intro'>
          <h2>Inside this Issue</h2>
          <p>Stay connected with Ra'edat newsletter updates.</p>
        </section>

        {/* Filter Section */}
        <div className='newsletter-filters'>
          <div className='filter-group'>
            <label>Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className='filter-group'>
            <label>Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='newsletter-container'>
          <div className='newsletter-grid'>
            {filteredNewsletters.length > 0 ? (
              filteredNewsletters.map((newsletter) => (
                <Link
                  to={`${newsletter.letterLink}`}
                  key={newsletter._id}
                  className='newsletter-card'
                >
                  <img src={newsletter.coverImage} alt={newsletter.month} />
                  <div className='newsletter-card-content'>
                    <h3>
                      {newsletter.month} {newsletter.year} | Volume{' '}
                      {newsletter.volume} Issue {newsletter.issue}
                    </h3>
                    <p>{newsletter.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className='no-results'>
                No newsletters found for the selected criteria.
              </p>
            )}
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

            {/* Conditional Rendering for Partner Portal */}
            {userRole === 'partner' && (
              <button className='cta-outline'>Partner Portal</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
