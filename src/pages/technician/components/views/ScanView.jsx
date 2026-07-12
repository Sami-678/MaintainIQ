import { useState } from "react";
import { QrCode, ScanLine, MapPin, Tag, ArrowRight } from "lucide-react";
import { assets } from "../../data/mockData.js";

export default function ScanView({ onNavigate }) {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(null);
  const [cursor, setCursor] = useState(0);

  const handleScan = () => {
    setScanning(true);
    setScanned(null);
    window.setTimeout(() => {
      const asset = assets[cursor % assets.length];
      setCursor((c) => c + 1);
      setScanned(asset);
      setScanning(false);
    }, 1100);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-lg border border-line bg-panel p-6 shadow-panel">
        <p className="text-xs font-mono text-faint uppercase tracking-widest mb-4">
          Camera viewfinder
        </p>

        <div className="relative aspect-square w-full max-w-sm mx-auto rounded-lg bg-bg border border-line overflow-hidden">
          {/* grid texture */}
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#2A2F37_1px,transparent_1px),linear-gradient(90deg,#2A2F37_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* corner brackets */}
          {["top-6 left-6 border-t-2 border-l-2", "top-6 right-6 border-t-2 border-r-2", "bottom-6 left-6 border-b-2 border-l-2", "bottom-6 right-6 border-b-2 border-r-2"].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute w-8 h-8 border-blueprint/70 ${pos}`}
              />
            )
          )}

          {scanning && (
            <div className="absolute inset-x-6 top-6 bottom-6 overflow-hidden">
              <div className="absolute inset-x-0 h-0.5 bg-blueprint shadow-[0_0_12px_2px_rgba(76,141,192,0.8)] animate-scanline" />
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <QrCode
              size={96}
              className={scanning ? "text-line" : "text-faint"}
              strokeWidth={1.2}
            />
          </div>

          {scanning && (
            <div className="absolute bottom-4 inset-x-0 flex justify-center">
              <span className="text-[11px] font-mono text-blueprint tracking-widest">
                READING CODE…
              </span>
            </div>
          )}
        </div>

        <button
          onClick={handleScan}
          disabled={scanning}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-blueprint/15 border border-blueprint/40 text-blueprint font-medium text-sm py-2.5 hover:bg-blueprint/20 transition-colors disabled:opacity-50"
        >
          <ScanLine size={16} />
          {scanning ? "Scanning…" : "Simulate Scan"}
        </button>
        <p className="text-[11px] text-faint text-center mt-2 font-mono">
          UI preview only — no camera or backend wired up
        </p>
      </div>

      <div className="rounded-lg border border-line bg-panel p-6 shadow-panel">
        <p className="text-xs font-mono text-faint uppercase tracking-widest mb-4">
          Scan result
        </p>

        {!scanned && !scanning && (
          <div className="h-full min-h-[240px] flex flex-col items-center justify-center text-center text-faint">
            <Tag size={28} className="mb-3" />
            <p className="text-sm">No asset scanned yet</p>
            <p className="text-xs mt-1">Run a scan to load the asset's public record.</p>
          </div>
        )}

        {scanning && (
          <div className="h-full min-h-[240px] flex items-center justify-center text-dim text-sm">
            Decoding asset link…
          </div>
        )}

        {scanned && !scanning && (
          <div className="space-y-4">
            <div>
              <p className="font-mono text-[11px] text-blueprint tracking-widest">
                {scanned.code}
              </p>
              <h3 className="font-display font-semibold text-ink text-lg mt-0.5">
                {scanned.name}
              </h3>
              <p className="inline-flex items-center gap-1 text-xs text-dim mt-1">
                <MapPin size={12} /> {scanned.location}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-panel2 border border-line p-3">
                <dt className="text-[11px] text-faint font-mono">Category</dt>
                <dd className="text-ink mt-0.5">{scanned.category}</dd>
              </div>
              <div className="rounded-md bg-panel2 border border-line p-3">
                <dt className="text-[11px] text-faint font-mono">Condition</dt>
                <dd className="text-ink mt-0.5">{scanned.condition}</dd>
              </div>
            </dl>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => onNavigate("report")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-amber/15 border border-amber/40 text-amber text-sm font-medium py-2.5 hover:bg-amber/20 transition-colors"
              >
                Report Issue
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigate("inspection")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-panel2 border border-line text-ink text-sm font-medium py-2.5 hover:border-faint transition-colors"
              >
                Go to Inspection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
