import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name } = await request.json();
  const token = `sess_${Math.random().toString(36).slice(2)}`;

  // create or find user by sessionToken
  const user = await prisma.user.create({ data: { name, sessionToken: token } });

  const cookieStore = await cookies();
  cookieStore.set({ name: "session_token", value: token, httpOnly: true, path: "/" });

  return Response.json({ ok: true, userId: user.id });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  return Response.json({ ok: true });
}
