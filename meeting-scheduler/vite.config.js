import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import zipPack from "vite-plugin-zip-pack";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), zipPack()],
  build: {
    outDir: "dist/app",
    emptyOutDir: true,
  },
  base: "",
});
