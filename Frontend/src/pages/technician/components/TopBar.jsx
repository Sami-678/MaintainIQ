import { Search, Bell, HelpCircle } from "lucide-react";
import { technician } from "../data/tasks";

export default function TopBar({ title }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
      <div>
        <div className="text-lg font-semibold text-slate-800">
          Hello, {technician.name.split(" ")[0]} {technician.name.split(" ")[1]}
        </div>
        {title && <div className="text-xs text-slate-400">{title}</div>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search tasks or assets..."
            className="w-64 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>
        <button className="rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600">
          <HelpCircle size={18} />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
          {technician.avatarInitials}
        </div>
      </div>
    </div>
  );
}
