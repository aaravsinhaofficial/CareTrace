import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function getUserIdFromCookie() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  if (!session) {
    const demo = await prisma.user.upsert({
      where: { sessionToken: "demo" },
      update: {},
      create: { name: "Demo User", sessionToken: "demo" },
    });
    return demo.id;
  }
  const user = await prisma.user.findUnique({ where: { sessionToken: session } });
  if (!user) {
    const created = await prisma.user.create({ data: { name: "Guest", sessionToken: session } });
    return created.id;
  }
  return user.id;
}

export async function POST(request: Request) {
  const userId = await getUserIdFromCookie();
  const body = await request.json();
  const { type, answers, score } = body ?? {};
  if (!type || !answers) return new Response("Missing fields", { status: 400 });
  const resp = await prisma.assessmentResponse.create({ data: { userId, type, answers, score } });
  return Response.json({ response: resp });
}
