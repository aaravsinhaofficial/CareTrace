import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function getUserIdFromCookie() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  const user = session ? await prisma.user.findUnique({ where: { sessionToken: session } }) : null;
  return user?.id ?? "demo";
}

export async function POST(request: Request) {
  const userId = await getUserIdFromCookie();
  const body = await request.json();
  const { type, answers, score } = body ?? {};
  if (!type || !answers) return new Response("Missing fields", { status: 400 });
  const resp = await prisma.assessmentResponse.create({ data: { userId, type, answers, score } });
  return Response.json({ response: resp });
}
