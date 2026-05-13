import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom" // Don't forget this!
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

  const navigate = useNavigate()

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
    // If it's a file, store the file object; otherwise, store the string value
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

    // IMPORTANT: Multer needs FormData to handle file uploads
    const data = new FormData()
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key])
    })

    try {
      await axios.post(`${BASE_URL}newsletter/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      setMessage("Newsletter created successfully!")
      setFormData(initialState) // Reset form
      getNewsletters()
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } catch (error) {
      console.error(error)
      setMessage("Failed to create newsletter.")
    }
  }

  const triggerDelete = (newsletter) => {
    navigate("/confirm-delete", {
      state: {
        id: newsletter._id,
        displayName: `${newsletter.month} ${newsletter.year} Issue`,
        deleteUrl: `${BASE_URL}newsletter/${newsletter._id}`,
        context: "Newsletter",
        redirectUrl: "/admin/newsletter", // Check if this matches your App.js route
      },
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(initialState)
    setMessage("")
  }

  return (
    <div className="newsletter-manager">
      <h2>Newsletter Management</h2>
      <h3>{editingId ? "Update Newsletter" : "Register New Newsletter"}</h3>

      {message && <p className="status-message">{message}</p>}

      <form onSubmit={handleCreate}>
        <label htmlFor="image">Upload Image or Paste Link:</label>
        <input
          type="file"
          name="coverImage"
          id="image"
          accept="image/*"
          onChange={handleChange}
        />

        {/* Added a text input so you can paste a URL if you don't have a file */}
        <input
          type="text"
          name="coverImage"
          placeholder="Or paste image URL here"
          value={
            typeof formData.coverImage === "string" ? formData.coverImage : ""
          }
          onChange={handleChange}
        />

        <input
          name="month"
          placeholder="Month"
          value={formData.month}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          name="volume"
          placeholder="Volume"
          value={formData.volume}
          onChange={handleChange}
          required
        />
        <input
          name="issue"
          placeholder="Issue"
          value={formData.issue}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="letterLink"
          placeholder="Letter Link"
          value={formData.letterLink}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update" : "Create"} Newsletter
        </button>
        {editingId && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h3>Newsletter List</h3>
      <div className="newsletter-list">
        {newsletters.length > 0 ? (
          newsletters.map((newsletter) => {
            // MOVED LOGIC INSIDE MAP: Check if image is a link or a file
            const isExternal = newsletter.coverImage?.startsWith("http")
            const imageSrc = isExternal
              ? newsletter.coverImage
              : `${BASE_URL}uploads/${newsletter.coverImage}`

            return (
              <div key={newsletter._id} className="newsletter-item">
                <img src={imageSrc} alt="Newsletter cover" width="150" />
                <p>
                  <strong>
                    {newsletter.month} {newsletter.year}
                  </strong>
                </p>
                <p>
                  Volume: {newsletter.volume} | Issue: {newsletter.issue}
                </p>
                <button onClick={() => triggerDelete(newsletter)}>
                  Delete
                </button>
                <hr />
              </div>
            )
          })
        ) : (
          <p>No newsletters found.</p>
        )}
      </div>
    </div>
  )
}

export default NewsletterManager
