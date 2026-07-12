import { NavLink, Link } from "react-router-dom";
import {
  LayoutGrid, ClipboardList, QrCode, AlertTriangle, BarChart3, History, Search, Wrench, LogOut, ArrowLeft, X,
} from "lucide-react";

const navItems = [
  { to: "", label: "Admin Dashboard", icon: LayoutGrid, end: true },
  { to: "asset-crud", label: "User Management", icon: ClipboardList },
  { to: "qr-generation", label: "QR Generation", icon: QrCode },
  { to: "issue-assignment", label: "Issue Assignment", icon: AlertTriangle },
  { to: "analytics", label: "Analytics", icon: BarChart3 },
  { to: "asset-history", label: "Asset History", icon: History },
  { to: "search", label: "Search", icon: Search },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", zIndex: 59 }}
        />
      )}
      <aside className={`app-sidebar${open ? " open" : ""} flex h-full w-64 flex-shrink-0 flex-col justify-between border-r border-slate-100 bg-white`}>
        <div>
          <div className="flex items-center justify-between px-5 py-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Wrench size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-none text-slate-800">MaintainIQ</div>
                <div className="mt-0.5 text-xs tracking-wide text-slate-400">USER MANAGEMENT</div>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close menu" className="sidebar-close-btn text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>

          <div className="px-5 pb-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600"
            >
              <ArrowLeft size={13} /> Back to home
            </Link>
          </div>

          <nav className="mt-2 flex flex-col gap-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                    }`
                  }
                >
                  <Icon size={16} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
              AR
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800">Alex Rivera</div>
              <div className="text-xs text-slate-400">Admin</div>
            </div>
          </div>
          <button aria-label="Logout" className="text-slate-400 hover:text-slate-600">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
