import { NavLink } from "react-router-dom"

import "../Style/Newsletter.css"

const Newsletter = () => {
  const highlights = [
    {
      id: 1,
      category: "Announcements",
      title: "Ra'edat's Vision for 2026",
      description:
        "Exploring our latest institutional impact and growth milestones.",
      tag: "Official",
    },
    {
      id: 2,
      category: "Community",
      title: "Baraha Member Spotlights",
      description:
        "Celebrating the entrepreneurs and leaders making waves in our digital home.",
      tag: "Trending",
    },
    {
      id: 3,
      category: "Events",
      title: "Upcoming Workshops",
      description:
        "Don't miss our next live sessions. Download Baraha to save your spot and join.",
      tag: "Live",
    },
    {
      id: 4,
      category: "Programs",
      title: "New Partner Opportunities",
      description:
        "Latest toolkits and resources from our partners like Tamkeen and INJAZ.",
      tag: "New",
    },
  ]

  return (
    <div className="news-container">
      <div className="news-hero-section">
        <img
          src="./assets/news.png"
          alt="Newsletters Hero"
          className="news-hero-image-file"
        />
        <div className="news-hero-overlay">
          <div className="hero-text">
            <h1>Welcome to Ra'edat's Newsletters...</h1>
            <p>Bridging our community and the Baraha platform</p>
          </div>
        </div>
      </div>

      <div className="news-content-wrapper">
        <section className="highlights-intro">
          <h2>Inside this Issue</h2>
          <p>Stay connected with Ra'edat news and Baraha community updates.</p>
        </section>

        <div className="news-highlights-grid">
          {highlights.map((item) => (
            <div key={item.id} className="news-highlight-card">
              <div className="card-tag">{item.tag}</div>
              <div className="card-body">
                <span className="category-label">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="learn-more-link">
                  Read more in Baraha →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="app-cta-banner">
          <h3>Want the full experience?</h3>
          <p>
            Join the conversation and register for events on the Baraha App.
          </p>
          <div className="cta-buttons">
            <NavLink to="https://apps.apple.com/us/app/raedat/id6742032306">
              <button className="cta-orange">Download Now</button>
            </NavLink>
            <button className="cta-outline">Partner Portal</button>{" "}
            {/* this should have conditional rendering if the user is a partner, let's leave it for now */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
