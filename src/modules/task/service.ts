import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServiceTask {
  async getTask() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }
}

export default new ServiceTask();