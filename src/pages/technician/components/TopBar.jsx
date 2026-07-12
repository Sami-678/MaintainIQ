import { technician } from "../data/mockData.js";
import { NAV_ITEMS } from "./Sidebar.jsx";

export default function TopBar({ active }) {
  const current = NAV_ITEMS.find((n) => n.key === active);

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-line bg-bg/95 backdrop-blur sticky top-0 z-10">
      <div>
        <p className="text-[11px] font-mono text-faint tracking-widest uppercase">
          {technician.zone}
        </p>
        <h1 className="font-display font-semibold text-ink text-lg md:text-xl leading-tight">
          {current?.label ?? "Dashboard"}
        </h1>
      </div>

      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green/30 bg-green/10">
        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulseDot" />
        <span className="text-[11px] font-mono text-green tracking-wide">{technician.shift}</span>
      </div>
    </header>
  );
}
