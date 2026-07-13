import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

const tabs = [
  { key: "all", label: "All" },
  { key: "assigned", label: "Assigned" },
  { key: "in_progress", label: "In Progress" },
  { key: "waiting_parts", label: "Waiting for Parts" },
];

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              active === tab.key
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="hidden items-center gap-3 sm:flex">
        <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700">
          <SlidersHorizontal size={13} /> Filter
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700">
          <ArrowUpDown size={13} /> Sort
        </button>
      </div>
    </div>
  );
}
