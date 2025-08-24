import { Metric } from "@/app/generated/prisma";

export type Trend = {
  currentAvg: number | null;
  prevAvg: number | null;
  delta: number | null;
  direction: "up" | "down" | "stable" | "n/a";
};

export function computeMoodTrend(metrics: Pick<Metric, "key" | "valueNum" | "recordedAt">[]): Trend {
  const mood = metrics.filter((m) => m.key === "mood" && typeof m.valueNum === "number");
  if (mood.length === 0) return { currentAvg: null, prevAvg: null, delta: null, direction: "n/a" };
  // last 14 days split into two windows of 7 days
  const sorted = [...mood].sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
  const now = Date.now();
  const d7 = 7 * 24 * 60 * 60 * 1000;
  const currentWindow = sorted.filter((m) => now - new Date(m.recordedAt).getTime() <= d7);
  const prevWindow = sorted.filter((m) => {
    const t = new Date(m.recordedAt).getTime();
    return now - t > d7 && now - t <= 2 * d7;
  });
  const avg = (arr: typeof sorted) => (arr.length ? arr.reduce((s, m) => s + (m.valueNum || 0), 0) / arr.length : null);
  const currentAvg = avg(currentWindow);
  const prevAvg = avg(prevWindow);
  const delta = currentAvg != null && prevAvg != null ? currentAvg - prevAvg : null;
  let direction: Trend["direction"] = "n/a";
  if (delta == null) direction = "n/a";
  else if (Math.abs(delta) < 0.2) direction = "stable";
  else if (delta > 0) direction = "up";
  else direction = "down";
  return { currentAvg, prevAvg, delta, direction };
}

export function sparklinePath(values: number[], width = 160, height = 40, padding = 2): { d: string; min: number; max: number } {
  const w = width - padding * 2;
  const h = height - padding * 2;
  if (values.length === 0) return { d: "", min: 0, max: 0 };
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = w / Math.max(1, values.length - 1);
  const points = values.map((v, i) => {
    const x = padding + i * step;
    const y = padding + h - ((v - min) / range) * h;
    return [x, y];
  });
  const d = points
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");
  return { d, min, max };
}
