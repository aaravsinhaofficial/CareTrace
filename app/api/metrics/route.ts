import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function getUserIdFromCookie() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  // If no session cookie, use or create a demo user and return its id
  if (!session) {
    const demo = await prisma.user.upsert({
      where: { sessionToken: "demo" },
      update: {},
      create: { name: "Demo User", sessionToken: "demo" },
    });
    return demo.id;
  }
  // If session exists but user not found, create it to avoid FK errors
  const user = await prisma.user.findUnique({ where: { sessionToken: session } });
  if (!user) {
    const created = await prisma.user.create({ data: { name: "Guest", sessionToken: session } });
    return created.id;
  }
  return user.id;
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
