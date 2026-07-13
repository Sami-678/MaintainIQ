const statusStyles = {
  assigned: { dot: "bg-blue-500", text: "text-blue-600", label: "Assigned" },
  in_progress: { dot: "bg-orange-500", text: "text-orange-600", label: "In Progress" },
  waiting_parts: { dot: "bg-slate-400", text: "text-slate-500", label: "Waiting for Parts" },
  resolved: { dot: "bg-emerald-500", text: "text-emerald-600", label: "Resolved" },
};

export default function StatusTag({ status }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
