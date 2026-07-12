const STATUS_COLOR = {
  Reported: "bg-dim",
  Assigned: "bg-blueprint",
  "Inspection Started": "bg-blueprint",
  "Maintenance In Progress": "bg-amber",
  "Waiting for Parts": "bg-amber",
  Resolved: "bg-green",
  Closed: "bg-green",
  Reopened: "bg-red",
};

const ACTIVE_STATUSES = ["Inspection Started", "Maintenance In Progress"];

export default function StatusLED({ status, showLabel = true, size = "sm" }) {
  const dotSize = size === "lg" ? "w-2.5 h-2.5" : "w-2 h-2";
  const isActive = ACTIVE_STATUSES.includes(status);

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex">
        <span
          className={`${dotSize} rounded-full ${STATUS_COLOR[status] || "bg-dim"} ${
            isActive ? "animate-pulseDot" : ""
          }`}
        />
      </span>
      {showLabel && (
        <span className="text-xs font-mono text-dim tracking-wide">{status}</span>
      )}
    </span>
  );
}
