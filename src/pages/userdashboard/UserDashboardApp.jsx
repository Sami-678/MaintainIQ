import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AssetCrud from "./subpages/AssetCrud";
import PlaceholderPage from "./subpages/PlaceholderPage";

export default function UserDashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);
  const openSidebar = () => setSidebarOpen(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />
      <Routes>
        <Route
          index
          element={
            <PlaceholderPage
              title="Admin Dashboard"
              description="Facility-wide overview and key metrics will live here."
              onOpenSidebar={openSidebar}
            />
          }
        />
        <Route path="asset-crud" element={<AssetCrud onOpenSidebar={openSidebar} />} />
        <Route
          path="qr-generation"
          element={
            <PlaceholderPage
              title="QR Generation"
              description="Generate and print QR codes for physical assets from here."
              onOpenSidebar={openSidebar}
            />
          }
        />
        <Route
          path="issue-assignment"
          element={
            <PlaceholderPage
              title="Issue Assignment"
              description="Review reported issues and assign them to technicians."
              onOpenSidebar={openSidebar}
            />
          }
        />
        <Route
          path="analytics"
          element={
            <PlaceholderPage
              title="Analytics"
              description="Facility-wide maintenance analytics and trends will live here."
              onOpenSidebar={openSidebar}
            />
          }
        />
        <Route
          path="asset-history"
          element={
            <PlaceholderPage
              title="Asset History"
              description="Full service history and audit trail for every asset."
              onOpenSidebar={openSidebar}
            />
          }
        />
        <Route
          path="search"
          element={
            <PlaceholderPage
              title="Search"
              description="Search across assets, tickets, and technicians facility-wide."
              onOpenSidebar={openSidebar}
            />
          }
        />
      </Routes>
    </div>
  );
}
