import "./App.css"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Newsletter from "./pages/Newsletter"
import PartnersPage from "./pages/Partnerspage"
import Home from "./pages/Home"
import About from "./pages/About"
import Community from "./pages/Community"
import AddPartner from "./components/AddPartner"
import Login from "./pages/login"
import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import PartnerManager from "./pages/PartnerManager"
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/partner" element={<PartnerManager />} />

          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/addPartner" element={<AddPartner />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
