import {
  LayoutDashboard,
  QrCode,
  FilePlus2,
  ClipboardCheck,
  Wrench,
  RefreshCcw,
  Wifi,
} from "lucide-react";
import { technician } from "../data/mockData.js";

export const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "scan", label: "Scan QR", icon: QrCode },
  { key: "report", label: "Report Issue", icon: FilePlus2 },
  { key: "inspection", label: "Inspection", icon: ClipboardCheck },
  { key: "maintenance", label: "Maintenance Form", icon: Wrench },
  { key: "status", label: "Update Status", icon: RefreshCcw },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-line bg-panel/60 h-screen sticky top-0">
      <div className="px-5 py-5 border-b border-line">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-blueprint/15 border border-blueprint/40 flex items-center justify-center">
            <Wrench size={16} className="text-blueprint" />
          </div>
          <div>
            <p className="font-display font-bold text-ink text-sm leading-none">MaintainIQ</p>
            <p className="text-[11px] text-faint font-mono mt-0.5">Technician Console</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blueprint/12 text-blueprint border border-blueprint/30"
                  : "text-dim border border-transparent hover:text-ink hover:bg-panel2"
              }`}
            >
              <Icon size={17} strokeWidth={2} />
              {label}
            </button>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-line">
        <div className="flex items-center gap-3 rounded-md bg-panel2 border border-line px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-panel flex items-center justify-center border border-line font-display text-xs text-ink">
            {technician.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-ink truncate">{technician.name}</p>
            <p className="text-[11px] text-faint font-mono truncate">{technician.id}</p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-green font-mono">
            <Wifi size={11} />
          </span>
        </div>
      </div>
    </aside>
  );
}
