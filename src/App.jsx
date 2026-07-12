import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import TechnicianDashboardApp from "./pages/technician/TechnicianDashboardApp";
import UserDashboardApp from "./pages/userdashboard/UserDashboardApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/technician-dashboard" element={<TechnicianDashboardApp />} />
        <Route path="/user-dashboard/*" element={<UserDashboardApp />} />
      </Routes>
    </BrowserRouter>
  );
}
