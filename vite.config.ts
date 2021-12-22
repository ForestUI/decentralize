import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ exclude: /\.stories\.(t|j)sx?$/ })],
  build: {
    lib: {
      entry: resolve(__dirname, "/src/index.ts"),
      name: "decentralize",
      fileName: (format) => `decentralize.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
