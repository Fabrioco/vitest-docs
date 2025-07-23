import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTask() {
  await prisma.task.create({
    data: {
      id: "1",
      title: "Tarefa 1",
      body: "Descrição da tarefa 1",
      done: false,
      createdAt: new Date(new Date()),
      updatedAt: new Date(new Date()),
    },
  });
}

seedTask()
  .then(async () => {
    console.log("Seed Task OK");
  })
  .catch(async (e) => {
    console.error("Seed Task Error");
  });
