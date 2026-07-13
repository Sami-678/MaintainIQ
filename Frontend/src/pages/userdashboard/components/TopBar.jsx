import { Search, Bell, Settings, Menu } from "lucide-react";

export default function TopBar({ onOpenSidebar }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3.5 sm:px-6">
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <button
          onClick={onOpenSidebar}
          aria-label="Open menu"
          className="hamburger-btn flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
        >
          <Menu size={18} />
        </button>
        <div className="relative w-full sm:w-80">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Global search..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
        <button aria-label="Notifications" className="relative rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>
        <button aria-label="Settings" className="rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600">
          <Settings size={18} />
        </button>
        <div className="hidden text-sm text-slate-500 md:block">
          Facility: <span className="font-medium text-slate-700">Sector 7G</span>
        </div>
      </div>
    </div>
  );
}
