"use client";

import React from "react";
import { sparklinePath } from "@/lib/analytics";

export function Sparkline({ values, label }: { values: number[]; label?: string }) {
  const { d, min, max } = sparklinePath(values);
  return (
    <div className="flex items-center gap-3">
      <svg width="160" height="40" role="img" aria-label={label || "sparkline"}>
        <path d={d} fill="none" strokeWidth="2" stroke="#2563eb" />
      </svg>
      <div className="text-xs text-gray-600">min {min.toFixed(1)} · max {max.toFixed(1)}</div>
    </div>
  );
}

export function TrendBadge({ direction }: { direction: "up" | "down" | "stable" | "n/a" }) {
  const m = {
    up: { text: "Improving", color: "bg-green-100 text-green-700" },
    down: { text: "Worsening", color: "bg-red-100 text-red-700" },
    stable: { text: "Stable", color: "bg-gray-100 text-gray-700" },
    "n/a": { text: "N/A", color: "bg-gray-100 text-gray-500" },
  }[direction];
  return <span className={`rounded-full px-2 py-1 text-xs ${m.color}`}>{m.text}</span>;
}
