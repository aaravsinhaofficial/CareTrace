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
  const [metrics, assessments] = await Promise.all([
    prisma.metric.findMany({ where: { userId } }),
    prisma.assessmentResponse.findMany({ where: { userId } }),
  ]);
  const body = JSON.stringify({ metrics, assessments }, null, 2);
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": "attachment; filename=caretrace.json",
    },
  });
}
