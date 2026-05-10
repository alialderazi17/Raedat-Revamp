import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
const AddPartner = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [Form, setForm] = useState([])

  const init = {
    companyName: "",
    number: "",
    email: "",
    message: "",
  }

  //   const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     await axios.post(``, Form)
  //     navigate(`/${id}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleChange = (event) => {
    setForm({ ...Form, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <label htmlFor="companyName">Company Name:</label>
      <input type="text" name="companyName" onChange={handleChange} required />

      <label htmlFor="number">Number :</label>
      <input type="number" name="number" onChange={handleChange} required />

      <label htmlFor="email">Email : </label>
      <input type="text" name="email" onChange={handleChange} required />

      <label htmlFor="message">Message</label>
      <input type="text" name="message" onChange={handleChange} required />
    </div>
  )
}
export default AddPartner
