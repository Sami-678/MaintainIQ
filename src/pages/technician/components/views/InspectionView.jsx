import { useEffect, useState } from "react";
import { ClipboardCheck, Sparkles } from "lucide-react";
import WorkOrderCard from "../WorkOrderCard.jsx";

const CONDITIONS = ["Good", "Fair", "Poor", "Unsafe"];

export default function InspectionView({ issues, selectedId, onSelectIssue, onUpdateIssue }) {
  const inspectable = issues.filter((i) => !["Resolved", "Closed"].includes(i.status));
  const issue = issues.find((i) => i.id === selectedId) || inspectable[0];

  const [checked, setChecked] = useState({});
  const [findings, setFindings] = useState("");
  const [condition, setCondition] = useState("Fair");

  useEffect(() => {
    setChecked({});
    setFindings("");
    setCondition("Fair");
  }, [issue?.id]);

  if (!issue) {
    return (
      <div className="rounded-lg border border-line bg-panel p-10 text-center text-faint">
        No inspectable work orders right now.
      </div>
    );
  }

  const allChecked = issue.aiChecks.every((_, idx) => checked[idx]);
  const started = issue.status !== "Assigned";

  const handleStart = () => {
    onUpdateIssue(issue.id, {
      status: "Inspection Started",
      historyNote: "Inspection started",
    });
  };

  const handleComplete = () => {
    if (!findings.trim()) return;
    onUpdateIssue(issue.id, {
      status: "Maintenance In Progress",
      historyNote: `Inspection completed — condition assessed as ${condition}`,
      findings,
      condition,
    });
  };

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6">
      <div className="space-y-3">
        <p className="text-xs font-mono text-faint uppercase tracking-widest">
          Assigned work orders
        </p>
        {inspectable.map((i) => (
          <WorkOrderCard
            key={i.id}
            issue={i}
            selected={i.id === issue.id}
            onClick={() => onSelectIssue(i.id)}
          />
        ))}
      </div>

      <div className="rounded-lg border border-line bg-panel p-6 shadow-panel space-y-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] text-blueprint tracking-widest">{issue.id}</p>
            <h2 className="font-display font-semibold text-ink text-lg mt-0.5">
              {issue.assetName}
            </h2>
            <p className="text-sm text-dim mt-1">{issue.description}</p>
          </div>
          {!started ? (
            <button
              onClick={handleStart}
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-blueprint/15 border border-blueprint/40 text-blueprint text-sm font-medium px-4 py-2 hover:bg-blueprint/20 transition-colors"
            >
              <ClipboardCheck size={15} />
              Start Inspection
            </button>
          ) : (
            <span className="shrink-0 text-[11px] font-mono text-blueprint px-3 py-1.5 rounded-full border border-blueprint/40 bg-blueprint/10">
              In progress
            </span>
          )}
        </div>

        <div className="rounded-md border border-line bg-panel2/60 p-4">
          <p className="flex items-center gap-1.5 text-xs font-mono text-faint uppercase tracking-widest mb-3">
            <Sparkles size={13} className="text-blueprint" />
            AI-suggested initial checks
          </p>
          <ul className="space-y-2.5">
            {issue.aiChecks.map((check, idx) => (
              <li key={idx}>
                <label className="flex items-start gap-2.5 text-sm text-ink cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!checked[idx]}
                    onChange={() =>
                      setChecked((c) => ({ ...c, [idx]: !c[idx] }))
                    }
                    className="mt-0.5 accent-blueprint w-4 h-4"
                  />
                  <span className={checked[idx] ? "text-dim line-through" : ""}>{check}</span>
                </label>
              </li>
            ))}
          </ul>
          {issue.aiCauses?.length > 0 && (
            <p className="text-[11px] text-faint mt-3">
              Possible causes: {issue.aiCauses.join(", ")}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Inspection findings
          </label>
          <textarea
            value={findings}
            onChange={(e) => setFindings(e.target.value)}
            rows={3}
            placeholder="Record what you found during inspection…"
            className="w-full mt-1.5 px-3 py-2.5 text-sm resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Asset condition
          </label>
          <div className="mt-1.5 grid grid-cols-4 gap-1.5">
            {CONDITIONS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCondition(c)}
                className={`rounded-md border py-2 text-[11px] font-mono transition-colors ${
                  condition === c
                    ? "border-blueprint text-blueprint bg-blueprint/10"
                    : "border-line text-dim"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleComplete}
          disabled={!started || !allChecked || !findings.trim()}
          className="w-full rounded-md bg-blueprint text-bg font-display font-semibold text-sm py-3 hover:bg-blueprint/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Complete Inspection &amp; Send to Maintenance
        </button>
        {started && (!allChecked || !findings.trim()) && (
          <p className="text-[11px] text-faint text-center -mt-3">
            Work through every check and add findings to continue.
          </p>
        )}
      </div>
    </div>
  );
}
