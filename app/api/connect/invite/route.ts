import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

async function requireUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_token")?.value || null;
  if (!session) return null;
  return prisma.user.findUnique({ where: { sessionToken: session } });
}

export async function POST(request: Request) {
  const user = await requireUser();
  if (!user) return new Response("Unauthorized", { status: 401 });
  const { circleName, role } = await request.json();

  const circle = await prisma.careCircle.create({ data: { name: circleName || `${user.name || "You"}'s Circle` } });
  await prisma.careCircleMember.create({ data: { userId: user.id, careCircleId: circle.id, role: role || "owner" } });

  // create share token
  const token = `share_${Math.random().toString(36).slice(2)}`;
  const share = await prisma.shareToken.create({ data: { token, careCircleId: circle.id, scopes: ["metrics.read", "assessments.read"] } });

  return Response.json({ circle, share });
}
