import { Request, Response } from "express";
import service from "./service";

class ControllerTask {
  async getTask(req: Request, res: Response) {
    try {
      const tasks = await service.getTask();
      return res.status(200).json(tasks);
    } catch (error) {
      console.error("Erro na getTask:", error);
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}

export default new ControllerTask();