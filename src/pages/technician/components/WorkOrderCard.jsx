import { MapPin } from "lucide-react";
import StatusLED from "./StatusLED.jsx";
import PriorityBadge from "./PriorityBadge.jsx";

export default function WorkOrderCard({ issue, selected = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`tag-punch w-full text-left flex rounded-lg border transition-colors overflow-hidden ${
        selected
          ? "border-blueprint bg-blueprint/[0.07]"
          : "border-line bg-panel hover:border-faint"
      }`}
    >
      {/* tag stub */}
      <div className="flex items-center justify-center px-2 border-r border-dashed border-line bg-panel2/60 shrink-0">
        <span
          className="font-mono text-[11px] text-faint tracking-widest"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {issue.id}
        </span>
      </div>

      <div className="flex-1 min-w-0 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-ink text-sm leading-snug truncate">
            {issue.assetName}
          </h3>
          <PriorityBadge priority={issue.priority} />
        </div>

        <p className="text-xs text-dim mt-1 line-clamp-2 leading-relaxed">{issue.description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="inline-flex items-center gap-1 text-[11px] text-faint">
            <MapPin size={12} />
            {issue.location}
          </span>
          <StatusLED status={issue.status} />
        </div>
      </div>
    </button>
  );
}
