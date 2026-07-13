export default function StatCard({ label, value, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="flex flex-1 items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm min-w-[160px]">
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="mt-1 text-2xl font-bold text-slate-800">{value}</div>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}>
        <Icon size={18} className={iconColor} />
      </div>
    </div>
  );
}
