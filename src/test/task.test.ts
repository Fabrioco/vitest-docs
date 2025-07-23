import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../app";

describe("GET /api/tasks", () => {
  it("deve retornar uma lista de tarefas", async () => {
    const res = await request(app).get("/api/tasks");

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);

    // Verifica que o body é um array (ou ajusta conforme sua API)
    expect(Array.isArray(res.body)).toBe(true);

    // Se quiser garantir que tem pelo menos uma tarefa
    expect(res.body.length).toBeGreaterThan(0);

    // Se quiser testar um campo específico da tarefa
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('title');
  });
});
