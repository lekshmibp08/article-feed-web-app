import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BASE_URL = process.env.VITE_API_BASE_URL

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        //target:"http://localhost:3000",
        target:BASE_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
