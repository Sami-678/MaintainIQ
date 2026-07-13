import { QrCode, Pencil, Trash2 } from "lucide-react";

export default function RowActions({ onViewQr, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-end gap-1.5">
      <button
        onClick={onViewQr}
        aria-label="View QR code"
        className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100"
      >
        <QrCode size={14} />
      </button>
      <button
        onClick={onEdit}
        aria-label="Edit asset"
        className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-500 hover:bg-slate-200"
      >
        <Pencil size={14} />
      </button>
      <button
        onClick={onDelete}
        aria-label="Delete asset"
        className="flex h-7 w-7 items-center justify-center rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}
