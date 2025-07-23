import controller from "./controller";
import { Router } from "express";

const router = Router();

router.get("/tasks", controller.getTask)

export default router