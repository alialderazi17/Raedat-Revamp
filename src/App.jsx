import "./App.css"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Newsletter from "./pages/Newsletter"
import PartnersPage from "./pages/Partnerspage"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/login"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
