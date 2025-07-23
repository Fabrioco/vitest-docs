import dotenv from "dotenv";
import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Database connected");
    console.log(`Server started on port ${PORT}`);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();

  }
});

