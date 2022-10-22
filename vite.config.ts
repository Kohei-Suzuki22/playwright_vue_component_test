import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  alias: {
    "@": resolve(__dirname, "node_modules"),
  },
  build: {
    rollupOptions: {
      external: [
        "beforeMount", // ignore react stuff
        // "vue-dom",
      ],
    },
  },
  optimizeDeps: {
    include: ["@playwright/experimental-ct-vue2/hooks", "@playwright/experimental-ct-vue2/hooks"],
  },
});