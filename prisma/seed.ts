import { prisma } from "../lib/prisma";

async function main() {
  const demo = await prisma.user.upsert({
    where: { sessionToken: "demo" },
    update: {},
    create: { name: "Demo User", sessionToken: "demo" },
  });

  const now = new Date();
  for (let i = 0; i < 5; i++) {
    await prisma.metric.create({
      data: {
        userId: demo.id,
        key: "mood",
        valueNum: 5 + (i % 3),
        recordedAt: new Date(now.getTime() - i * 86400000),
      },
    });
  }

  console.log("Seeded demo user and metrics");
}

main().finally(async () => {
  await prisma.$disconnect();
});