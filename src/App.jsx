import "./App.css"
import Nav from "./components/Nav"
import Newsletter from "./pages/Newsletter"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
