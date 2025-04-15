import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Map @ to your src directory
    },
  },
  plugins: [react(), tailwindcss(), svgr()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
