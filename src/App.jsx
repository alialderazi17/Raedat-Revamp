import "./App.css"
import Nav from "./components/Nav"
import Newsletter from "./pages/Newsletter"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </div>
    </>
  )
}

export default App
