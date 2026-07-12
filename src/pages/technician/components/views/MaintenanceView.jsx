import { useEffect, useState } from "react";
import { Plus, Trash2, CheckCircle2 } from "lucide-react";
import WorkOrderCard from "../WorkOrderCard.jsx";

const CONDITIONS = ["Good", "Fair", "Poor", "Unsafe"];
let partSeq = 0;
const newPart = () => ({ key: `p${partSeq++}`, name: "", qty: 1, cost: 0 });

export default function MaintenanceView({ issues, selectedId, onSelectIssue, onUpdateIssue }) {
  const workable = issues.filter((i) =>
    ["Maintenance In Progress", "Waiting for Parts"].includes(i.status)
  );
  const issue = issues.find((i) => i.id === selectedId && workable.includes(i)) || workable[0];

  const [workNotes, setWorkNotes] = useState("");
  const [parts, setParts] = useState([newPart()]);
  const [timeSpent, setTimeSpent] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [nextServiceDate, setNextServiceDate] = useState("");
  const [finalCondition, setFinalCondition] = useState("Good");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setWorkNotes("");
    setParts([newPart()]);
    setTimeSpent("");
    setCompletionDate("");
    setNextServiceDate("");
    setFinalCondition("Good");
    setError("");
  }, [issue?.id]);

  if (!issue) {
    return (
      <div className="rounded-lg border border-line bg-panel p-10 text-center text-faint">
        No work orders are in active maintenance right now.
      </div>
    );
  }

  const totalCost = parts.reduce((sum, p) => sum + Number(p.qty || 0) * Number(p.cost || 0), 0);

  const updatePart = (key, field, value) =>
    setParts((ps) => ps.map((p) => (p.key === key ? { ...p, [field]: value } : p)));

  const removePart = (key) => setParts((ps) => ps.filter((p) => p.key !== key));

  const canResolve = workNotes.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (totalCost < 0) {
      setError("Maintenance cost cannot be negative.");
      return;
    }
    if (
      completionDate &&
      nextServiceDate &&
      new Date(nextServiceDate) < new Date(completionDate)
    ) {
      setError("Next service date cannot be before the maintenance completion date.");
      return;
    }
    if (!workNotes.trim()) {
      setError("A maintenance note is required before resolving an issue.");
      return;
    }

    onUpdateIssue(issue.id, {
      status: "Resolved",
      historyNote: `Maintenance completed — ${parts.filter((p) => p.name).length} part(s) replaced, cost logged`,
      condition: finalCondition,
    });
    setConfirmed(true);
    window.setTimeout(() => setConfirmed(false), 3500);
  };

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6">
      <div className="space-y-3">
        <p className="text-xs font-mono text-faint uppercase tracking-widest">
          In maintenance
        </p>
        {workable.map((i) => (
          <WorkOrderCard
            key={i.id}
            issue={i}
            selected={i.id === issue.id}
            onClick={() => onSelectIssue(i.id)}
          />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-line bg-panel p-6 shadow-panel space-y-6"
      >
        {confirmed && (
          <div className="flex items-center gap-2 rounded-md border border-green/40 bg-green/10 text-green text-sm px-4 py-3">
            <CheckCircle2 size={16} />
            Maintenance record saved. Asset returned to Operational.
          </div>
        )}
        {error && (
          <div className="rounded-md border border-red/40 bg-red/10 text-red text-sm px-4 py-3">
            {error}
          </div>
        )}

        <div>
          <p className="font-mono text-[11px] text-blueprint tracking-widest">{issue.id}</p>
          <h2 className="font-display font-semibold text-ink text-lg mt-0.5">
            {issue.assetName}
          </h2>
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Work performed
          </label>
          <textarea
            value={workNotes}
            onChange={(e) => setWorkNotes(e.target.value)}
            rows={3}
            placeholder="Describe the repair carried out…"
            className="w-full mt-1.5 px-3 py-2.5 text-sm resize-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Parts used
            </label>
            <button
              type="button"
              onClick={() => setParts((ps) => [...ps, newPart()])}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-blueprint hover:underline"
            >
              <Plus size={12} /> Add part
            </button>
          </div>

          <div className="space-y-2">
            {parts.map((p) => (
              <div key={p.key} className="grid grid-cols-[1fr_64px_84px_32px] gap-2 items-center">
                <input
                  type="text"
                  placeholder="Part name"
                  value={p.name}
                  onChange={(e) => updatePart(p.key, "name", e.target.value)}
                  className="px-2.5 py-2 text-sm"
                />
                <input
                  type="number"
                  min={1}
                  value={p.qty}
                  onChange={(e) => updatePart(p.key, "qty", e.target.value)}
                  className="px-2.5 py-2 text-sm font-mono"
                />
                <input
                  type="number"
                  min={0}
                  placeholder="Cost"
                  value={p.cost}
                  onChange={(e) => updatePart(p.key, "cost", e.target.value)}
                  className="px-2.5 py-2 text-sm font-mono"
                />
                <button
                  type="button"
                  onClick={() => removePart(p.key)}
                  className="text-faint hover:text-red transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-2">
            <span className="text-xs font-mono text-dim">
              Total cost: <span className="text-ink">{totalCost.toFixed(2)}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Time spent (hrs)
            </label>
            <input
              type="number"
              min={0}
              step={0.5}
              value={timeSpent}
              onChange={(e) => setTimeSpent(e.target.value)}
              className="w-full mt-1.5 px-3 py-2.5 text-sm font-mono"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Final condition
            </label>
            <select
              value={finalCondition}
              onChange={(e) => setFinalCondition(e.target.value)}
              className="w-full mt-1.5 px-3 py-2.5 text-sm"
            >
              {CONDITIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Completion date
            </label>
            <input
              type="date"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
              className="w-full mt-1.5 px-3 py-2.5 text-sm font-mono"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-faint uppercase tracking-widest">
              Next service date
            </label>
            <input
              type="date"
              value={nextServiceDate}
              onChange={(e) => setNextServiceDate(e.target.value)}
              className="w-full mt-1.5 px-3 py-2.5 text-sm font-mono"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!canResolve}
          className="w-full rounded-md bg-green/90 text-bg font-display font-semibold text-sm py-3 hover:bg-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Resolve Issue &amp; Update Asset History
        </button>
        {!canResolve && (
          <p className="text-[11px] text-faint text-center -mt-3">
            A maintenance note is required before resolving.
          </p>
        )}
      </form>
    </div>
  );
}
