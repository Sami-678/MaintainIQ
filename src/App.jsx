import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import TechnicianDashboardApp from './pages/technician/TechnicianDashboardApp.jsx'
import UserDashboardApp from './pages/userdashboard/UserDashboardApp.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/technician-dashboard/*" element={<TechnicianDashboardApp />} />
      <Route path="/user-dashboard/*" element={<UserDashboardApp />} />
    </Routes>
  )
}
