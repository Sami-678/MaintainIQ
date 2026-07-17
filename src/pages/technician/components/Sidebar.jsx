import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, ClipboardList, History, User, Settings, LogOut, Wrench, ArrowLeft } from "lucide-react";
import { technician as demoTechnician } from "../data/tasks";
import { useAuth } from "../../../context/AuthContext.jsx";

const navItems = [
  { to: "/technician-dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/technician-dashboard/my-tasks", label: "My Tasks", icon: ClipboardList },
  { to: "/technician-dashboard/history", label: "History", icon: History },
  { to: "/technician-dashboard/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const name = user?.name || demoTechnician.name;
  const role = user ? "Technician" : demoTechnician.role;
  const avatarInitials = user?.avatarInitials || demoTechnician.avatarInitials;

  return (
    <aside className="flex h-full w-60 flex-col justify-between border-r border-slate-100 bg-white px-4 py-5">
      <div>
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
            <Wrench size={14} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold leading-none text-blue-700">MaintainIQ</div>
            <div className="text-[11px] text-slate-400">Technician Portal</div>
          </div>
        </div>

        <div className="mt-3 px-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600"
          >
            <ArrowLeft size={13} /> Back to home
          </Link>
        </div>

        <nav className="mt-5 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }`
                }
              >
                <Icon size={17} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div>
        <div className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2.5">
          <span className="text-xs font-medium text-slate-500">Availability</span>
          <AvailabilityToggle />
        </div>

        <div className="mt-3 flex items-center gap-2.5 px-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            {avatarInitials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-800">{name}</div>
            <div className="truncate text-xs text-slate-400">{role}</div>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700">
            <Settings size={17} />
            Settings
          </button>
          <Link
            to="/"
            onClick={logout}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-rose-500 hover:bg-rose-50"
          >
            <LogOut size={17} />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
}

function AvailabilityToggle() {
  return (
    <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500">
      <span className="inline-block h-3.5 w-3.5 translate-x-4 rounded-full bg-white shadow" />
    </span>
  );
}
