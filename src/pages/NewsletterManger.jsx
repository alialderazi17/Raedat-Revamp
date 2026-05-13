import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../global.js"
import "../Style/NewsletterManager.css"

const initialState = {
  coverImage: "",
  month: "",
  year: "",
  volume: "",
  issue: "",
  description: "",
  letterLink: "",
}

const NewsletterManager = () => {
  const [newsletters, setNewsletters] = useState([])
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState(initialState)
  const [editingId, setEditingId] = useState(null)

  const getNewsletters = async () => {
    try {
      const response = await axios.get(`${BASE_URL}newsletter/`)
      setNewsletters(response.data)
    } catch (error) {
      console.error("error getting newsletter", error)
    }
  }

  useEffect(() => {
    getNewsletters()
  }, [])

  const handleChange = (e) => {
    const { name, type, files, value } = e.target

    setFormData({ ...formData, [name]: type === "file" ? files[0] : value })
  }
  const handleEditInit = (newsletter) => {
    setEditingId(newsletter._id)
    setFormData({
      coverImage: newsletter.coverImage,
      month: newsletter.month,
      year: newsletter.year,
      volume: newsletter.volume,
      issue: newsletter.issue,
      description: newsletter.description,
      letterLink: newsletter.letterLink,
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    try {
      await axios.post(`${BASE_URL}newsletter/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const response = await axios.post(`${BASE_URL}newsletter`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setMessage("newlstter created successfully!")
      getNewsletters()
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } catch (error) {
      console.error(error)
      setMessage("Failed to create newsletter.")
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}newsletter/${id}`)
      setMessage("newsletter deleted successfully")
      getNewsletters()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      setMessage("Error deleting newsletter")
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(initialState)
    setMessage("")
  }

  return (
    <div className="newsletter-manager">
      <h2>newsletter Management</h2>
      <h3>
        {editingId ? "Update newsletter Mode" : "Register New newsletter"}
      </h3>

      {message && <p>{message}</p>}

      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          name="coverImage"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />
        <input
          name="month"
          placeholder="month"
          value={formData.month}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          placeholder="year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <input
          name="volume"
          placeholder="volume"
          value={formData.volume}
          onChange={handleChange}
          required
        />
        <input
          name="issue"
          placeholder="issue"
          value={formData.issue}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="letterLink"
          placeholder="letterLink"
          value={formData.letterLink}
          onChange={handleChange}
          required
        />

        {!editingId && <button type="submit">Create Partner</button>}
      </form>

      <hr />

      <h3>newsletter List</h3>
      <div>
        {newsletters.length > 0 ? (
          newsletters.map((newsletter) => (
            <div key={newsletter._id}>
              <p>coverImage {newsletter.coverImage}</p>
              <img
                src={`${BASE_URL}uploads/${newsletter.coverImage}`}
                alt="newsletter-image"
              />
              <p>month: {newsletter.month}</p>
              <p>year: {newsletter.year}</p>
              <p>voluem: {newsletter.volume}</p>
              <p>issue: {newsletter.issue}</p>
              <p>description: {newsletter.description}</p>
              <p>letterLink: {newsletter.letterLink}</p>

              <button onClick={() => handleDelete(newsletter._id)}>
                Delete
              </button>

              <hr />
            </div>
          ))
        ) : (
          <p>No newsletter members found.</p>
        )}
      </div>
    </div>
  )
}

export default NewsletterManager
