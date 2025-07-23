import { Express } from "express";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 3000;
export function startServer(app: Express) {
    app.listen(PORT, () => {
        console.log("Server started on teste " + PORT);
    });
}

startServer(app);