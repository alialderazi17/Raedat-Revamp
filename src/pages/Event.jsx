import '../Style/Event.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global.js'

const Event = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}event`)
        setEvents(response.data)
      } catch (error) {
        console.error('Error getting events: ', error.message)
      }
    }
    getEvents()
  }, [])

  return (
    <div className='event-page-container'>
      <img
        className='event-banner'
        src='/assets/EventImg/event head.jpg'
        alt='Events Header'
      />

      <div className='event-list-wrapper'>
        {events.length > 0 ? (
          events.map((event) => {
            const spotsRemaining = event.capacity - event.RSVP
            const isLowAvailability = spotsRemaining > 0 && spotsRemaining < 20
            const isSoldOut = spotsRemaining <= 0

            return (
              <div className='event-card' key={event._id}>
                <div className='event-header'>
                  <div className='event-image-container'>
                    <img
                      className='event-image'
                      src='/assets/EventImg/Woman.jpg'
                      alt={event.title}
                    />
                  </div>
                  <h1 className='event-main-title'>{event.title}</h1>
                </div>

                <hr className='divider' />

                <div className='event-details'>
                  <div className='detail-row'>
                    <span className='detail-label'>Date:</span>
                    <span className='detail-value'>
                      {new Date(event.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className='detail-row'>
                    <span className='detail-label'>Time:</span>
                    <span className='detail-value'>{event.time}</span>
                  </div>
                  <div className='detail-row'>
                    <span className='detail-label'>Location:</span>
                    <span className='detail-value'>{event.location}</span>
                  </div>
                  <div className='detail-row'>
                    <span className='detail-label'>Availability:</span>

                    <span
                      className={`detail-value ${isLowAvailability ? 'status-critical' : 'orange-text'}`}
                    >
                      {isSoldOut ? (
                        <span className='sold-out-text'>FULLY BOOKED</span>
                      ) : (
                        `${spotsRemaining} spots left`
                      )}
                    </span>
                  </div>
                </div>

                <hr className='divider' />

                <div className='event-footer'>
                  <button
                    className={`rsvp-button ${isSoldOut ? 'disabled-btn' : ''}`}
                    disabled={isSoldOut}
                  >
                    {isSoldOut ? 'Sold Out' : 'Book Your Spot'}
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <div className='no-events-container'>
            <p className='no-events'>
              No upcoming events scheduled. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Event
