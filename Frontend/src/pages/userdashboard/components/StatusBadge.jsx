const statusStyles = {
  Operational: "bg-emerald-50 text-emerald-600",
  "Under Maintenance": "bg-amber-50 text-amber-600",
  "Out of Service": "bg-rose-50 text-rose-600",
  Retired: "bg-slate-100 text-slate-500",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
