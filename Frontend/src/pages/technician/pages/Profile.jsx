import { Mail, Phone, Wrench, ShieldCheck } from "lucide-react";
import TopBar from "../components/TopBar";
import { technician, stats } from "../data/tasks";

export default function Profile() {
  return (
    <div className="flex-1">
      <TopBar title="Profile" />

      <div className="p-6">
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
              {technician.avatarInitials}
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-800">{technician.name}</div>
              <div className="text-sm text-slate-500">{technician.role}</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <InfoRow icon={Mail} label="Email" value="ahmed.khan@maintainiq.app" />
            <InfoRow icon={Phone} label="Phone" value="+92 300 1234567" />
            <InfoRow icon={Wrench} label="Specialty" value="HVAC & Electrical" />
            <InfoRow icon={ShieldCheck} label="Employee ID" value="TECH-0042" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MiniStat label="Assigned to me" value={stats.assignedToMe} />
          <MiniStat label="In progress" value={stats.inProgress} />
          <MiniStat label="Resolved this week" value={stats.resolvedThisWeek} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-sm font-medium text-slate-700">{value}</div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
    </div>
  );
}
