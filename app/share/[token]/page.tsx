import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Sparkline } from "@/components/charts";
import Disclaimer from "@/components/disclaimer";

export default async function ShareViewPage({ params }: { params: { token: string } }) {
  const token = params.token;
  const share = await prisma.shareToken.findUnique({
    where: { token },
    include: {
      careCircle: {
        include: {
          members: { include: { user: true } },
        },
      },
    },
  });

  if (!share || (share.expiresAt && share.expiresAt < new Date())) {
    notFound();
  }

  const circleId = share.careCircleId;
  const members = share.careCircle.members;
  const userIds = members.map((m) => m.userId);

  const [metrics, assessments] = await Promise.all([
    prisma.metric.findMany({ where: { userId: { in: userIds } }, orderBy: { recordedAt: "desc" }, take: 50 }),
    prisma.assessmentResponse.findMany({ where: { userId: { in: userIds } }, orderBy: { createdAt: "desc" }, take: 50 }),
  ]);

  const nameByUserId = new Map(members.map((m) => [m.userId, m.user?.name || "Member"])) as Map<string, string>;
  const moodSeries = metrics
    .filter((m) => m.key === "mood" && m.valueNum != null)
    .slice(0, 30)
    .map((m) => m.valueNum!)
    .reverse();

  const scopes = Array.isArray(share.scopes) ? (share.scopes as string[]) : [];
  const canSeeMetrics = scopes.includes("metrics.read");
  const canSeeAssessments = scopes.includes("assessments.read");

  return (
    <main className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Shared Care Circle View</h1>
            <p className="mt-1 text-gray-600">Read-only snapshot for care partners. No personal identifiers beyond names provided by members.</p>
            <p className="mt-2 text-sm text-gray-500">Circle: <span className="font-medium">{share.careCircle.name}</span> · Members: {members.length}</p>
          </div>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">Read-only</span>
        </div>
      </section>

      {canSeeMetrics && (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Mood trend</h2>
          {moodSeries.length > 0 ? (
            <div className="mt-3">
              <Sparkline values={moodSeries} label="Mood sparkline" />
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No mood data yet.</p>
          )}
        </section>
      )}

      {canSeeMetrics && (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Recent Metrics</h2>
          {metrics.length === 0 ? (
            <p className="mt-2 text-gray-600">No metrics available.</p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm" aria-label="Recent shared metrics">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="py-2 pr-3">When</th>
                    <th className="py-2 pr-3">Member</th>
                    <th className="py-2 pr-3">Metric</th>
                    <th className="py-2 pr-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m) => (
                    <tr key={m.id} className="border-b last:border-0">
                      <td className="py-2 pr-3 whitespace-nowrap">{new Date(m.recordedAt).toLocaleString()}</td>
                      <td className="py-2 pr-3">{nameByUserId.get(m.userId) || "Member"}</td>
                      <td className="py-2 pr-3">{m.key}{m.unit ? ` (${m.unit})` : ""}</td>
                      <td className="py-2 pr-3">{m.valueNum != null ? m.valueNum : m.valueText}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {canSeeAssessments && (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Recent Assessments</h2>
          {assessments.length === 0 ? (
            <p className="mt-2 text-gray-600">No assessments available.</p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm" aria-label="Recent shared assessments">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="py-2 pr-3">When</th>
                    <th className="py-2 pr-3">Member</th>
                    <th className="py-2 pr-3">Type</th>
                    <th className="py-2 pr-3">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {assessments.map((a) => (
                    <tr key={a.id} className="border-b last:border-0">
                      <td className="py-2 pr-3 whitespace-nowrap">{new Date(a.createdAt).toLocaleString()}</td>
                      <td className="py-2 pr-3">{nameByUserId.get(a.userId || "") || "Member"}</td>
                      <td className="py-2 pr-3 uppercase">{a.type}</td>
                      <td className="py-2 pr-3">{a.score ?? "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      <Disclaimer />
    </main>
  );
}
