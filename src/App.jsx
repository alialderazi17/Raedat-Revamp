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
import Event from "./pages/Event"
import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import PartnerManager from "./pages/PartnerManager"
import AdminManager from "./pages/AdminManager"
import PartnerDashboard from "./pages/PartnerDashboard"
import ContactPage from "./pages/ContactPage"
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/PartnerDashboard" element={<PartnerDashboard />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/partner" element={<PartnerManager />} />
          <Route path="/admin/admin" element={<AdminManager />} />

          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/addPartner" element={<AddPartner />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
