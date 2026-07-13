const priorityStyles = {
  critical: "bg-rose-50 text-rose-600",
  high: "bg-orange-50 text-orange-600",
  medium: "bg-amber-50 text-amber-600",
  low: "bg-slate-100 text-slate-500",
};

const priorityLabels = {
  critical: "Critical",
  high: "High priority",
  medium: "Medium",
  low: "Low priority",
};

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${priorityStyles[priority]}`}
    >
      {priorityLabels[priority]}
    </span>
  );
}
