export default function Pagination({ page, totalPages, pageSize, totalCount, onChange }) {
  const shownCount = Math.min(pageSize, totalCount - (page - 1) * pageSize);

  const pageNumbers = [];
  for (let p = 1; p <= totalPages; p++) pageNumbers.push(p);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-3 text-sm text-slate-500">
      <div>
        Showing {shownCount} of {totalCount} assets
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded-md px-2.5 py-1.5 text-slate-500 hover:bg-slate-50 disabled:opacity-40"
        >
          Previous
        </button>
        {pageNumbers.map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`h-7 w-7 rounded-md text-xs font-medium ${
              p === page ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="rounded-md px-2.5 py-1.5 text-slate-500 hover:bg-slate-50 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
