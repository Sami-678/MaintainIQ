import { useState } from "react";
import { ClipboardList, Clock, CheckCircle2 } from "lucide-react";
import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import FilterTabs from "../components/FilterTabs";
import TaskCard from "../components/TaskCard";
import TaskDetailModal from "../components/TaskDetailModal";
import FloatingAction from "../components/FloatingAction";
import { tasks, stats } from "../data/tasks";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  const activeTasks = tasks.filter((t) => t.status !== "resolved");
  const visibleTasks = activeTab === "all" ? activeTasks : activeTasks.filter((t) => t.status === activeTab);

  return (
    <div className="flex-1">
      <TopBar title="Technician Dashboard" />

      <div className="p-6">
        <div className="flex flex-wrap gap-4">
          <StatCard
            label="Assigned to Me"
            value={stats.assignedToMe}
            icon={ClipboardList}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
          />
          <StatCard
            label="In Progress"
            value={stats.inProgress}
            icon={Clock}
            iconBg="bg-orange-50"
            iconColor="text-orange-600"
          />
          <StatCard
            label="Resolved This Week"
            value={stats.resolvedThisWeek}
            icon={CheckCircle2}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
          />
        </div>

        <div className="mt-6">
          <FilterTabs active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {visibleTasks.map((task) => (
            <TaskCard key={task.id} task={task} onViewDetails={setSelectedTask} />
          ))}
          {visibleTasks.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
              No tasks in this category right now.
            </div>
          )}
        </div>
      </div>

      <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      <FloatingAction />
    </div>
  );
}
