import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import zipPack from "vite-plugin-zip-pack";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), zipPack()],
  build: {
    outDir: "dist/app",
    emptyOutDir: true,
  },
  base: "",
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../../shared"),
    },
  },
});
