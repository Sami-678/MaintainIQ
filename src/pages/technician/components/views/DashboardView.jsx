import { ClipboardList, Wrench, CheckCircle2, AlertTriangle } from "lucide-react";
import WorkOrderCard from "../WorkOrderCard.jsx";

function StatCard({ icon: Icon, label, value, tone }) {
  return (
    <div className="rounded-lg border border-line bg-panel p-4 shadow-panel">
      <div className="flex items-center justify-between">
        <span className={`w-8 h-8 rounded-md flex items-center justify-center ${tone}`}>
          <Icon size={16} />
        </span>
        <span className="font-mono text-2xl font-semibold text-ink">{value}</span>
      </div>
      <p className="text-xs text-dim mt-3">{label}</p>
    </div>
  );
}

export default function DashboardView({ issues, onSelectIssue, onNavigate }) {
  const assigned = issues.filter((i) => i.status === "Assigned").length;
  const inProgress = issues.filter((i) =>
    ["Inspection Started", "Maintenance In Progress"].includes(i.status)
  ).length;
  const waiting = issues.filter((i) => i.status === "Waiting for Parts").length;
  const resolved = issues.filter((i) => ["Resolved", "Closed"].includes(i.status)).length;

  const openIssues = issues.filter((i) => !["Resolved", "Closed"].includes(i.status));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          icon={ClipboardList}
          label="Newly assigned"
          value={assigned}
          tone="bg-blueprint/10 text-blueprint"
        />
        <StatCard
          icon={Wrench}
          label="In progress"
          value={inProgress}
          tone="bg-amber/10 text-amber"
        />
        <StatCard
          icon={AlertTriangle}
          label="Waiting for parts"
          value={waiting}
          tone="bg-red/10 text-red"
        />
        <StatCard
          icon={CheckCircle2}
          label="Resolved this week"
          value={resolved}
          tone="bg-green/10 text-green"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-ink text-sm">Your open work orders</h2>
          <button
            onClick={() => onNavigate("scan")}
            className="text-xs font-mono text-blueprint hover:underline"
          >
            + Scan an asset
          </button>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {openIssues.map((issue) => (
            <WorkOrderCard
              key={issue.id}
              issue={issue}
              onClick={() => {
                onSelectIssue(issue.id);
                onNavigate("inspection");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
