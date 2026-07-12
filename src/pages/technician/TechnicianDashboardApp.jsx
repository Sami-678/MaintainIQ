import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import BottomNav from "./components/BottomNav.jsx";
import DashboardView from "./components/views/DashboardView.jsx";
import ScanView from "./components/views/ScanView.jsx";
import ReportView from "./components/views/ReportView.jsx";
import InspectionView from "./components/views/InspectionView.jsx";
import MaintenanceView from "./components/views/MaintenanceView.jsx";
import StatusView from "./components/views/StatusView.jsx";
import { initialIssues } from "./data/mockData.js";

let issueSeq = 90;

export default function TechnicianDashboardApp() {
  const [active, setActive] = useState("dashboard");
  const [issues, setIssues] = useState(initialIssues);
  const [selectedIssueId, setSelectedIssueId] = useState(initialIssues[0].id);

  const handleAddIssue = ({ asset, title, description, category, priority }) => {
    const newIssue = {
      id: `ISS-22${issueSeq++}`,
      assetCode: asset.code,
      assetName: asset.name,
      location: asset.location,
      category,
      priority,
      status: "Reported",
      reportedBy: "Hamza Iqbal (Technician)",
      reportedAgo: "just now",
      description: title ? `${title}. ${description}` : description,
      aiChecks: [
        "Verify power and connections before further inspection",
        "Capture photo evidence of the fault",
        "Cross-check against recent asset history",
      ],
      aiCauses: ["Pending AI triage review"],
      history: [{ at: "just now", actor: "Hamza Iqbal", action: "Issue reported from the field" }],
    };
    setIssues((prev) => [newIssue, ...prev]);
  };

  const handleUpdateIssue = (id, { status, historyNote, ...rest }) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? {
              ...issue,
              ...rest,
              status: status ?? issue.status,
              history: historyNote
                ? [...issue.history, { at: "just now", actor: "Hamza Iqbal", action: historyNote }]
                : issue.history,
            }
          : issue
      )
    );
  };

  const commonProps = {
    issues,
    selectedId: selectedIssueId,
    onSelectIssue: setSelectedIssueId,
    onUpdateIssue: handleUpdateIssue,
  };

  return (
    <div className="tech-console min-h-screen flex bg-bg">
      <Sidebar active={active} onNavigate={setActive} />

      <div className="flex-1 min-w-0">
        <div className="px-4 md:px-8 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-dim hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} /> Back to home
          </Link>
        </div>
        <TopBar active={active} />

        <main className="px-4 md:px-8 py-6 pb-24 md:pb-10">
          {active === "dashboard" && (
            <DashboardView
              issues={issues}
              onSelectIssue={setSelectedIssueId}
              onNavigate={setActive}
            />
          )}
          {active === "scan" && <ScanView onNavigate={setActive} />}
          {active === "report" && <ReportView onAddIssue={handleAddIssue} />}
          {active === "inspection" && <InspectionView {...commonProps} />}
          {active === "maintenance" && <MaintenanceView {...commonProps} />}
          {active === "status" && <StatusView {...commonProps} />}
        </main>
      </div>

      <BottomNav active={active} onNavigate={setActive} />
    </div>
  );
}
