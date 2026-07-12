const PRIORITY_STYLE = {
  Low: "text-dim border-line bg-panel2",
  Medium: "text-blueprint border-blueprint/40 bg-blueprint/10",
  High: "text-amber border-amber/40 bg-amber/10",
  Critical: "text-red border-red/50 bg-red/10",
};

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded border text-[11px] font-mono uppercase tracking-wider ${
        PRIORITY_STYLE[priority] || PRIORITY_STYLE.Low
      }`}
    >
      {priority}
    </span>
  );
}
