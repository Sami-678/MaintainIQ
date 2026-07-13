import { X, MapPin } from "lucide-react";
import PriorityBadge from "./PriorityBadge";
import StatusTag from "./StatusTag";

export default function TaskDetailModal({ task, onClose }) {
  if (!task) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <PriorityBadge priority={task.priority} />
            <span className="text-xs text-slate-400">{task.id}</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={18} />
          </button>
        </div>

        <h2 className="mt-3 text-lg font-semibold text-slate-800">{task.title}</h2>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={14} />
          {task.asset} · {task.location}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">{task.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <StatusTag status={task.status} />
          <span className="text-xs text-slate-400">
            {task.status === "resolved" ? `Resolved ${task.resolvedAt}` : task.timeAgo}
          </span>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
