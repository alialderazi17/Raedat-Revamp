import "../Style/Community.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Community = () => {
  const [communities, setCommunities] = useState([])

  useEffect(() => {
    const getCommunities = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/communities/`)
        setCommunities(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCommunities()
  }, [])

  return (
    <div className="community-page">
      <div className="hero-section">
        <img
          src="/assets/CommunityPage/communityHero.png"
          alt="Community Hero"
          className="hero-image"
        />
        <p className="hero-subtitle">
          Stay connected with Ra'edat news and Baraha community updates.
        </p>
      </div>

      <div className="community-grid">
        {communities.map((community) => (
          <div
            className="community-card"
            key={community._id || community.communityName}
          >
            {/* Top Label Row */}
            <div className="card-header">
              <span className="category-label">COMMUNITY</span>
              {community.private ? (
                <span className="status-badge private">Private</span>
              ) : (
                <span className="status-badge public">Public</span>
              )}
            </div>

            {/* Content Logic */}
            <div className="card-body">
              <h2 className="community-title">{community.communityName}</h2>

              {community.private ? (
                <p className="privacy-notice">
                  This community is private. Request access to view details and
                  join the conversation.
                </p>
              ) : (
                <>
                  <p className="community-description">
                    {community.description}
                  </p>
                  <p className="member-count">
                    <strong>{community.memberCount}</strong> members making
                    waves.
                  </p>
                </>
              )}
            </div>

            <div className="card-footer">
              <button className="read-more-btn">
                {community.private
                  ? "Request to Join"
                  : "Read more in Baraha →"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community
