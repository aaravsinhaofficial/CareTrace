import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { token: string } }) {
  const token = params.token;
  const share = await prisma.shareToken.findUnique({ where: { token } });
  if (!share) return new Response("Not found", { status: 404 });

  const circleId = share.careCircleId;
  // Read-only data for the entire circle
  const members = await prisma.careCircleMember.findMany({ where: { careCircleId: circleId } });
  const userIds = members.map((m) => m.userId);

  const [metrics, assessments] = await Promise.all([
    prisma.metric.findMany({ where: { userId: { in: userIds } }, orderBy: { recordedAt: "desc" }, take: 100 }),
    prisma.assessmentResponse.findMany({ where: { userId: { in: userIds } }, orderBy: { createdAt: "desc" }, take: 100 }),
  ]);

  return Response.json({ circleId, metrics, assessments, scopes: share.scopes });
}
