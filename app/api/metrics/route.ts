import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function getUserIdFromCookie() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  const user = session ? await prisma.user.findUnique({ where: { sessionToken: session } }) : null;
  return user?.id ?? "demo";
}

export async function GET() {
  const userId = await getUserIdFromCookie();
  const metrics = await prisma.metric.findMany({ where: { userId }, orderBy: { recordedAt: "desc" }, take: 50 });
  return Response.json({ metrics });
}

export async function POST(request: Request) {
  const userId = await getUserIdFromCookie();
  const body = await request.json();
  const { key, valueNum, valueText, unit } = body ?? {};
  if (!key) return new Response("Missing key", { status: 400 });
  const metric = await prisma.metric.create({ data: { userId, key, valueNum, valueText, unit } });
  return Response.json({ metric });
}

export async function DELETE(request: Request) {
  const userId = await getUserIdFromCookie();
  const { id } = await request.json();
  if (!id) return new Response("Missing id", { status: 400 });
  // Ensure metric belongs to user
  const m = await prisma.metric.findUnique({ where: { id } });
  if (!m || m.userId !== userId) return new Response("Not found", { status: 404 });
  await prisma.metric.delete({ where: { id } });
  return Response.json({ ok: true });
}
