import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function MetricsList() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;

  let userId: string;
  if (!session) {
    const demo = await prisma.user.upsert({
      where: { sessionToken: "demo" },
      update: {},
      create: { name: "Demo User", sessionToken: "demo" },
    });
    userId = demo.id;
  } else {
    const user = await prisma.user.findUnique({ where: { sessionToken: session } });
    if (!user) {
      const created = await prisma.user.create({ data: { name: "Guest", sessionToken: session } });
      userId = created.id;
    } else {
      userId = user.id;
    }
  }

  const metrics = await prisma.metric.findMany({
    where: { userId },
    orderBy: { recordedAt: "desc" },
    take: 10,
  });

  async function removeMetric(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/metrics`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 bg-white" aria-live="polite">
        {metrics.map((m) => (
          <li key={m.id} className="flex items-center justify-between px-4 py-3 gap-4">
            <div className="min-w-0">
              <div className="truncate font-medium">{m.key}</div>
              <div className="text-sm text-gray-500">{m.valueNum ?? m.valueText}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500 whitespace-nowrap">{new Date(m.recordedAt).toLocaleString()}</div>
              <form action={removeMetric}>
                <input type="hidden" name="id" value={m.id} />
                <button className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50" aria-label={`Delete ${m.key}`}>
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
        {metrics.length === 0 && <li className="px-4 py-3 text-sm text-gray-500">No metrics yet.</li>}
      </ul>
    </div>
  );
}
