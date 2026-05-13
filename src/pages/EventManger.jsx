import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/EventManager.css"

const initialState = {
  title: "",
  date: "",
  time: "",
  location: "",
  RSVP: "",
}

const EventManager = () => {
  const navigate = useNavigate()

  const [events, setEvents] = useState([])
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState(initialState)
  const [editingId, setEditingId] = useState(null)

  const getEvents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}event/`)
      setEvents(response.data)
    } catch (error) {
      console.error("error getting events", error)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleEditInit = (event) => {
    setEditingId(event._id)
    setFormData({
      title: event.title,
      date: event.date ? event.date.split("T")[0] : "",
      time: event.time,
      location: event.location,
      RSVP: event.RSVP,
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}event/`, formData)
      setMessage("Event created successfully!")
      setFormData(initialState)
      getEvents()
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } catch (error) {
      setMessage("Failed to create event.")
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${BASE_URL}event/${editingId}`, formData)
      setMessage("Event updated successfully!")
      setEditingId(null)
      setFormData(initialState)
      getEvents()
      const element = document.getElementById(`event-${editingId}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    } catch (error) {
      setMessage("Update failed.")
    }
  }

  const triggerDelete = (event) => {
    navigate("/confirm-delete", {
      state: {
        id: event._id,
        displayName: event.title,
        deleteUrl: `${BASE_URL}event/${event._id}`,
        context: "Event",
        redirectUrl: "/admin/event",
      },
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(initialState)
    setMessage("")
  }

  return (
    <div className="event-manager">
      <h2>Event Management</h2>
      <h3>{editingId ? "Update Event" : "Create New Event"}</h3>

      {message && <p className="status-msg">{message}</p>}

      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        <input
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          name="RSVP"
          placeholder="RSVP Link or Email"
          value={formData.RSVP}
          onChange={handleChange}
        />

        <div className="btn-container">
          <button type="submit">
            {editingId ? "Confirm Update" : "Create Event"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      <div className="list-container">
        {events.map((event) => (
          <div key={event._id} id={`event-${event._id}`} className="item-card">
            <div className="item-info">
              <h3>{event.title}</h3>
              <p>
                <strong>Date:</strong>
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>RSVP:</strong> {event.RSVP}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
            </div>
            <div className="item-btns">
              <button onClick={() => handleEditInit(event)}>Edit</button>
              <button onClick={() => triggerDelete(event)}>Delete</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventManager
