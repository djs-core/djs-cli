import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs"],
  entryPoints: ["src/index.ts"],
  outDir: "dist",
  onSuccess: "cd playground && pnpm i @djs-core/cli && pnpm run test",
  dts: true,
  skipNodeModulesBundle: true,
  watch: true,
});
