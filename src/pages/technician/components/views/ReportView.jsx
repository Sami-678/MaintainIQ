import { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import { assets, priorityOrder } from "../../data/mockData.js";

const PRIORITY_TONE = {
  Low: "border-line text-dim data-[active=true]:bg-panel2 data-[active=true]:text-ink data-[active=true]:border-faint",
  Medium:
    "border-line text-dim data-[active=true]:bg-blueprint/15 data-[active=true]:text-blueprint data-[active=true]:border-blueprint/50",
  High: "border-line text-dim data-[active=true]:bg-amber/15 data-[active=true]:text-amber data-[active=true]:border-amber/50",
  Critical:
    "border-line text-dim data-[active=true]:bg-red/15 data-[active=true]:text-red data-[active=true]:border-red/50",
};

export default function ReportView({ onAddIssue }) {
  const [assetCode, setAssetCode] = useState(assets[0].code);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Electrical");
  const [priority, setPriority] = useState("Medium");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const asset = assets.find((a) => a.code === assetCode);
    onAddIssue({ asset, title, description, category, priority });

    setSubmitted(true);
    setTitle("");
    setDescription("");
    setPriority("Medium");
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="max-w-2xl">
      {submitted && (
        <div className="mb-5 flex items-center gap-2 rounded-md border border-green/40 bg-green/10 text-green text-sm px-4 py-3">
          <CheckCircle2 size={16} />
          Issue logged and sent for AI triage review.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-line bg-panel p-6 shadow-panel space-y-5"
      >
        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">Asset</label>
          <select
            value={assetCode}
            onChange={(e) => setAssetCode(e.target.value)}
            className="w-full mt-1.5 px-3 py-2.5 text-sm"
          >
            {assets.map((a) => (
              <option key={a.code} value={a.code}>
                {a.name} · {a.code}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Issue title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Display flickering, HDMI not detected"
            className="w-full mt-1.5 px-3 py-2.5 text-sm"
            required
          />
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe what you observed in plain language…"
            className="w-full mt-1.5 px-3 py-2.5 text-sm resize-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1.5 px-3 py-2.5 text-sm"
            >
              {["Electrical", "Mechanical", "HVAC", "Plumbing", "Structural"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Priority
            </label>
            <div className="mt-1.5 grid grid-cols-4 gap-1.5">
              {priorityOrder.map((p) => (
                <button
                  type="button"
                  key={p}
                  data-active={priority === p}
                  onClick={() => setPriority(p)}
                  className={`rounded-md border py-2 text-[11px] font-mono transition-colors ${PRIORITY_TONE[p]}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Evidence (optional)
          </label>
          <div className="mt-1.5 flex flex-col items-center justify-center gap-1.5 rounded-md border border-dashed border-line py-6 text-faint">
            <UploadCloud size={20} />
            <p className="text-xs">Drop a photo or video, or tap to browse</p>
            <p className="text-[10px] font-mono">UI placeholder — upload not wired up</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blueprint text-bg font-display font-semibold text-sm py-3 hover:bg-blueprint/90 transition-colors"
        >
          Submit Issue Report
        </button>
      </form>
    </div>
  );
}
