import { describe, expect, it } from "vitest";
import { subtracao } from "./subtracao";

describe("Vai subtrair dois numeros", () => {
    it("Deve subtrair", () => {
        expect(subtracao(1, 2)).toBe(-1);
    });
});