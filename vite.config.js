import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/fe_project/", //github pages
  base: "./",
  server: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: "dist",
  },
  sourmap: true,
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
