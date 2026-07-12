import { useEffect, useState } from "react";
import { Check, RotateCcw, History } from "lucide-react";
import { statusFlow } from "../../data/mockData.js";
import StatusLED from "../StatusLED.jsx";

export default function StatusView({ issues, selectedId, onSelectIssue, onUpdateIssue }) {
  const issue = issues.find((i) => i.id === selectedId) || issues[0];
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setNotes("");
  }, [issue?.id]);

  if (!issue) return null;

  const currentIndex = statusFlow.indexOf(issue.status);
  const isReopened = issue.status === "Reopened";
  const nextStatus =
    !isReopened && currentIndex >= 0 && currentIndex < statusFlow.length - 1
      ? statusFlow[currentIndex + 1]
      : null;
  const canReopen = issue.status === "Resolved" || issue.status === "Closed";

  const applyTransition = (status) => {
    onUpdateIssue(issue.id, {
      status,
      historyNote: notes.trim()
        ? `Status changed to ${status} — ${notes.trim()}`
        : `Status changed to ${status}`,
    });
    setNotes("");
    setConfirmed(true);
    window.setTimeout(() => setConfirmed(false), 3000);
  };

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6">
      <div className="space-y-3">
        <p className="text-xs font-mono text-faint uppercase tracking-widest">Your issues</p>
        {issues.map((i) => (
          <button
            key={i.id}
            onClick={() => onSelectIssue(i.id)}
            className={`w-full text-left rounded-md border px-3 py-2.5 transition-colors ${
              i.id === issue.id
                ? "border-blueprint bg-blueprint/[0.07]"
                : "border-line bg-panel hover:border-faint"
            }`}
          >
            <p className="text-xs font-mono text-faint">{i.id}</p>
            <p className="text-sm text-ink font-medium truncate">{i.assetName}</p>
            <StatusLED status={i.status} />
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-line bg-panel p-6 shadow-panel space-y-6">
        {confirmed && (
          <div className="flex items-center gap-2 rounded-md border border-green/40 bg-green/10 text-green text-sm px-4 py-3">
            <Check size={16} />
            Status updated and recorded in asset history.
          </div>
        )}

        <div>
          <p className="font-mono text-[11px] text-blueprint tracking-widest">{issue.id}</p>
          <h2 className="font-display font-semibold text-ink text-lg mt-0.5">
            {issue.assetName}
          </h2>
          <p className="text-sm text-dim mt-1">{issue.description}</p>
        </div>

        {/* Stepper */}
        <div>
          <p className="text-xs font-mono text-faint uppercase tracking-widest mb-4">
            Workflow progress
          </p>
          <div className="flex items-center overflow-x-auto pb-2">
            {statusFlow.map((s, idx) => {
              const done = !isReopened && idx <= currentIndex;
              const isCurrent = s === issue.status;
              return (
                <div key={s} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center gap-1.5 w-24">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-mono ${
                        isCurrent
                          ? "border-blueprint bg-blueprint text-bg"
                          : done
                          ? "border-green/60 bg-green/15 text-green"
                          : "border-line text-faint"
                      }`}
                    >
                      {done && !isCurrent ? <Check size={12} /> : idx + 1}
                    </div>
                    <span
                      className={`text-[10px] text-center leading-tight ${
                        isCurrent ? "text-blueprint" : done ? "text-dim" : "text-faint"
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                  {idx < statusFlow.length - 1 && (
                    <div
                      className={`h-px w-6 shrink-0 ${
                        done ? "bg-green/40" : "bg-line"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {isReopened && (
            <p className="text-[11px] text-red font-mono mt-2">
              Issue was reopened — restart the resolution workflow.
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-mono text-faint uppercase tracking-widest">
            Notes (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="Add context for this status change…"
            className="w-full mt-1.5 px-3 py-2.5 text-sm resize-none"
          />
        </div>

        <div className="flex gap-2">
          {nextStatus && (
            <button
              onClick={() => applyTransition(nextStatus)}
              className="flex-1 rounded-md bg-blueprint text-bg font-display font-semibold text-sm py-3 hover:bg-blueprint/90 transition-colors"
            >
              Advance to "{nextStatus}"
            </button>
          )}
          {canReopen && (
            <button
              onClick={() => applyTransition("Reopened")}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-red/40 text-red text-sm font-medium py-3 hover:bg-red/10 transition-colors"
            >
              <RotateCcw size={15} />
              Reopen Issue
            </button>
          )}
          {!nextStatus && !canReopen && (
            <p className="text-sm text-faint">This issue has reached the end of its workflow.</p>
          )}
        </div>

        <div>
          <p className="flex items-center gap-1.5 text-xs font-mono text-faint uppercase tracking-widest mb-3">
            <History size={13} />
            Activity history
          </p>
          <ul className="space-y-2.5 border-l border-line pl-4">
            {issue.history
              .slice()
              .reverse()
              .map((h, idx) => (
                <li key={idx} className="relative text-sm">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-line" />
                  <p className="text-ink">{h.action}</p>
                  <p className="text-[11px] text-faint font-mono">
                    {h.actor} · {h.at}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
