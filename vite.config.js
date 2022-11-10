import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://frsargua.github.io/frsargua.github.io.main",
  plugins: [react()],
});
