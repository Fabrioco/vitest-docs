import { PrismaClient } from "@prisma/client";
import { seedTask } from "./task";

const prisma = new PrismaClient();

async function main() {
  await seedTask();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
