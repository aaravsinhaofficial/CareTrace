"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MetricsForm() {
  const [key, setKey] = useState("mood");
  const [valueNum, setValueNum] = useState<number | "">("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!key) return alert("Please select a metric type");
    const numeric = typeof valueNum === "number" ? valueNum : Number.NaN;
    if (Number.isNaN(numeric)) return alert("Please enter a numeric value");
    setSaving(true);
    const res = await fetch("/api/metrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, valueNum: numeric, valueText: note }),
    });
    setSaving(false);
    if (!res.ok) {
      alert("Failed to save metric");
      return;
    }
    setValueNum("");
    setNote("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row" aria-label="Add metric form">
      <label className="sr-only" htmlFor="metric-key">Metric</label>
      <select id="metric-key" className="rounded-md border border-gray-300 px-3 py-2" value={key} onChange={(e) => setKey(e.target.value)}>
        <option value="mood">Mood (1-10)</option>
        <option value="hr">Heart Rate (bpm)</option>
        <option value="bp_sys">Systolic BP (mmHg)</option>
        <option value="sleep_hours">Sleep (hours)</option>
      </select>
      <label className="sr-only" htmlFor="metric-value">Value</label>
      <input
        id="metric-value"
        type="number"
        step="1"
        className="w-32 rounded-md border border-gray-300 px-3 py-2"
        placeholder="Value"
        inputMode="numeric"
        min={0}
        value={valueNum}
        onChange={(e) => setValueNum(e.target.value === "" ? "" : Number(e.target.value))}
        required
      />
      <label className="sr-only" htmlFor="metric-note">Note</label>
      <input
        id="metric-note"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50" disabled={saving}>
        {saving ? "Saving..." : "Add"}
      </button>
    </form>
  );
}
