import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "../Style/ConfirmDelete.css"

const ConfirmDelete = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Destructure universal properties from state
  const { id, displayName, deleteUrl, context, redirectUrl } =
    location.state || {}

  const handleDelete = async () => {
    try {
      await axios.delete(deleteUrl)
      // Navigate back to the specific management page with a dynamic message
      navigate(redirectUrl || -1, {
        state: { message: `${context || "Item"} deleted successfully` },
      })
    } catch (error) {
      console.error("Deletion error:", error)
      alert(`Failed to delete ${context?.toLowerCase() || "item"}.`)
    }
  }

  if (!id || !deleteUrl) return <p>Invalid deletion request.</p>

  return (
    <div className="confirm-delete-container">
      <div className="confirm-delete-card">
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete the {context?.toLowerCase()}:
          <br />
          <strong>{displayName}</strong>?
        </p>

        <div className="confirm-button-group">
          <button className="btn-confirm-delete" onClick={handleDelete}>
            Yes, Delete {context}
          </button>
          <button className="btn-cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDelete
