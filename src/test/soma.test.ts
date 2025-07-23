import { describe, expect, it } from "vitest";
import { soma } from "./soma";

describe("Vai somar dois numeros", () => {
    it("Deve somar", () => {
        expect(soma(1, 2)).toBe(3);
    });
});