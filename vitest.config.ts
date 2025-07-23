import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["src/server.ts", "vitest-doc", "vitest.config.ts", "prisma", "src/app.ts", "src/modules/"],
    },
  },
});
