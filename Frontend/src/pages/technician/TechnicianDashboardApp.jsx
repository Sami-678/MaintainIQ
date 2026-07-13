import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import History from "./pages/History";
import Profile from "./pages/Profile";

export default function TechnicianDashboardApp() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="my-tasks" element={<MyTasks />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
