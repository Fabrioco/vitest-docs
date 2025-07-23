import express from "express";
import routesTask from "./modules/task/routes";

const app = express();

app.use(express.json());

app.use("/api", routesTask);

export default app;
