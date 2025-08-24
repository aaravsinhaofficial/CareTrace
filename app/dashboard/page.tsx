// Simple dashboard with metric capture and trend view
// Removed 'use client' to make this a Server Component

import { Suspense } from "react";
import MetricsForm from "@/components/metrics-form";
import MetricsList from "@/components/metrics-list";
import { prisma } from "@/lib/prisma";
import { computeMoodTrend } from "@/lib/analytics";
import { Sparkline, TrendBadge } from "@/components/charts";
import { cookies } from "next/headers";

async function getUserId() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  const user = session ? await prisma.user.findUnique({ where: { sessionToken: session } }) : null;
  return user?.id ?? "demo";
}

export default async function DashboardPage() {
  const userId = await getUserId();
  const recent = await prisma.metric.findMany({ where: { userId }, orderBy: { recordedAt: "desc" }, take: 30 });
  const trend = computeMoodTrend(recent);
  const moodSeries = recent.filter((m) => m.key === "mood" && m.valueNum != null).map((m) => m.valueNum!) as number[];

  return (
    <main className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-gray-600">Capture daily metrics and view recent entries.</p>
        <div className="mt-4">
          <MetricsForm />
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Mood trend (7-day)</h2>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <Sparkline values={[...moodSeries].reverse()} label="Mood sparkline" />
          <div className="text-sm text-gray-700">
            Avg now: {trend.currentAvg?.toFixed(2) ?? "-"} · Prev: {trend.prevAvg?.toFixed(2) ?? "-"} ·
            Delta: {trend.delta?.toFixed(2) ?? "-"}
          </div>
          <TrendBadge direction={trend.direction} />
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recent Metrics</h2>
        <Suspense fallback={<div role="status" aria-live="polite">Loading...</div>}>
          <MetricsList />
        </Suspense>
      </section>
    </main>
  );
}