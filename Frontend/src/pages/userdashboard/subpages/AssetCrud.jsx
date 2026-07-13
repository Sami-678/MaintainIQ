import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import TopBar from "../components/TopBar";
import FilterBar from "../components/FilterBar";
import StatusBadge from "../components/StatusBadge";
import RowActions from "../components/RowActions";
import Pagination from "../components/Pagination";
import { allAssets, categories, locations, statuses } from "../data/assets";

const PAGE_SIZE = 7;

export default function AssetCrud({ onOpenSidebar }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return allAssets.filter((a) => {
      const matchesQuery =
        !query ||
        a.name.toLowerCase().includes(query.toLowerCase()) ||
        a.code.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || a.category === category;
      const matchesLocation = !location || a.location === location;
      const matchesStatus = !status || a.status === status;
      return matchesQuery && matchesCategory && matchesLocation && matchesStatus;
    });
  }, [query, category, location, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleClear = () => {
    setQuery("");
    setCategory("");
    setLocation("");
    setStatus("");
    setPage(1);
  };

  return (
    <div className="flex-1">
      <TopBar onOpenSidebar={onOpenSidebar} />

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold text-slate-800">User Dashboard</h1>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            <Plus size={16} /> Add New User
          </button>
        </div>

        <div className="mt-4">
          <FilterBar
            query={query}
            setQuery={(v) => { setQuery(v); setPage(1); }}
            category={category}
            setCategory={(v) => { setCategory(v); setPage(1); }}
            location={location}
            setLocation={(v) => { setLocation(v); setPage(1); }}
            status={status}
            setStatus={(v) => { setStatus(v); setPage(1); }}
            categories={categories}
            locations={locations}
            statuses={statuses}
            onClear={handleClear}
          />
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-3 font-medium">User Name</th>
                <th className="px-5 py-3 font-medium">User ID</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Last Service</th>
                <th className="px-5 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((asset, i) => (
                <tr key={asset.code} className={i !== pageItems.length - 1 ? "border-b border-slate-50" : ""}>
                  <td className="px-5 py-3.5 font-medium text-slate-800">{asset.name}</td>
                  <td className="px-5 py-3.5 text-slate-500">{asset.code}</td>
                  <td className="px-5 py-3.5 text-slate-500">{asset.category}</td>
                  <td className="px-5 py-3.5 text-slate-500">{asset.location}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={asset.status} /></td>
                  <td className="px-5 py-3.5 text-slate-500">{asset.lastService}</td>
                  <td className="px-5 py-3.5">
                    <RowActions
                      onViewQr={() => {}}
                      onEdit={() => {}}
                      onDelete={() => {}}
                    />
                  </td>
                </tr>
              ))}
              {pageItems.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-sm text-slate-400">
                    No users match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          pageSize={PAGE_SIZE}
          totalCount={filtered.length}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
