import TopBar from "../components/TopBar";

export default function PlaceholderPage({ title, description, onOpenSidebar }) {
  return (
    <div className="flex-1">
      <TopBar onOpenSidebar={onOpenSidebar} />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white py-20 text-center">
          <p className="max-w-sm text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
