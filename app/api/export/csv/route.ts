import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function getUserId() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  const user = session ? await prisma.user.findUnique({ where: { sessionToken: session } }) : null;
  return user?.id ?? "demo";
}

export async function GET() {
  const userId = await getUserId();
  const metrics = await prisma.metric.findMany({ where: { userId } });
  const mHeader = "id,key,valueNum,valueText,unit,recordedAt";
  const mRows = metrics.map((m) =>
    [m.id, m.key, m.valueNum ?? "", (m.valueText || "").replaceAll(",", " "), m.unit || "", m.recordedAt.toISOString()].join(",")
  );
  const assessments = await prisma.assessmentResponse.findMany({ where: { userId } });
  const aHeader = "id,type,score,createdAt";
  const aRows = assessments.map((a) => [a.id, a.type, a.score ?? "", a.createdAt.toISOString()].join(","));
  const csv = ["# Metrics", mHeader, ...mRows, "", "# Assessments", aHeader, ...aRows].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=caretrace.csv",
    },
  });
}
