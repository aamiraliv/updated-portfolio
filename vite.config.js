import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          keyframes: {
            shine1: {
              "0%": { "background-position": "100%" },
              "100%": { "background-position": "-100%" },
            },
          },
          animation: {
            shine1: "shine 5s linear infinite",
          },
        },
      },
      plugins: [],
    }),
  ],
});
