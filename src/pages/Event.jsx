import "../Style/Event.css"

const Event = () => {
  return (
    <>
      {/* Top Banner Image */}
      <img
        className="event-banner"
        src="/assets/EventImg/event head.jpg"
        alt="header photo"
      />
      <div className="event-card">
        {/* Header Section: Profile Image and Main Title */}
        <div className="event-header">
          <img
            className="event-image"
            src="/assets/EventImg/Woman.jpg"
            alt="test event"
          />
          <h1 className="event-main-title">first event</h1>
        </div>

        <hr className="divider" />

        {/* Details Section: Event Info */}
        <div className="event-details">
          <h2 className="detail-item">Name: </h2>
          <h2 className="detail-item">Title: </h2>
          <h2 className="detail-item">Date: </h2>
          <h2 className="detail-item">Time: </h2>
          <h2 className="detail-item">Location: </h2>
          <h2 className="detail-item">RSVP: </h2>
        </div>

        <hr className="divider" />

        {/* Footer/Quote Section */}
        <div className="event-footer">
          <h3 className="event-tagline">easy come easy go!!!!!!!!!!!</h3>
        </div>

        <hr className="divider" />
      </div>
    </>
  )
}

export default Event
