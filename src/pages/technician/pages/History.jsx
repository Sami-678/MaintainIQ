import { useState } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import TopBar from "../components/TopBar";
import PriorityBadge from "../components/PriorityBadge";
import TaskDetailModal from "../components/TaskDetailModal";
import { tasks } from "../data/tasks";

export default function History() {
  const [selectedTask, setSelectedTask] = useState(null);
  const resolvedTasks = tasks.filter((t) => t.status === "resolved");

  return (
    <div className="flex-1">
      <TopBar title="Resolved task history" />

      <div className="p-6">
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          {resolvedTasks.map((task, i) => (
            <button
              key={task.id}
              onClick={() => setSelectedTask(task)}
              className={`flex w-full flex-wrap items-center justify-between gap-3 px-5 py-4 text-left hover:bg-slate-50 ${
                i !== resolvedTasks.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-400">{task.id}</span>
                  <PriorityBadge priority={task.priority} />
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-800">{task.title}</div>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={12} />
                  {task.asset} · {task.location}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <CheckCircle2 size={13} /> Resolved
                </span>
                <span className="text-xs text-slate-400">{task.resolvedAt}</span>
              </div>
            </button>
          ))}
          {resolvedTasks.length === 0 && (
            <div className="py-10 text-center text-sm text-slate-400">No resolved tasks yet.</div>
          )}
        </div>
      </div>

      <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
}
