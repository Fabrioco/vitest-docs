import { Request, Response } from "express";
import service from "./service";

class ControllerTask {
  async getTask(req: Request, res: Response) {
    const tasks = await service.getTask();
    return res.status(200).json(tasks);
  }
}

export default new ControllerTask();
