import { NAV_ITEMS } from "./Sidebar.jsx";

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 border-t border-line bg-panel/95 backdrop-blur">
      <div className="grid grid-cols-6">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-mono ${
                isActive ? "text-blueprint" : "text-faint"
              }`}
            >
              <Icon size={18} strokeWidth={2} />
              <span className="truncate w-full text-center px-0.5 leading-tight">
                {label.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
