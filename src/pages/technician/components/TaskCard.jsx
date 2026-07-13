import { MapPin } from "lucide-react";
import PriorityBadge from "./PriorityBadge";
import StatusTag from "./StatusTag";

export default function TaskCard({ task, onViewDetails }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <PriorityBadge priority={task.priority} />
        <span className="text-xs text-slate-400">{task.timeAgo}</span>
      </div>

      <h3 className="mt-2.5 text-[15px] font-semibold text-slate-800">{task.title}</h3>
      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
        <MapPin size={12} className="shrink-0" />
        {task.asset} · {task.location}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <StatusTag status={task.status} />
        <button
          onClick={() => onViewDetails && onViewDetails(task)}
          className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
