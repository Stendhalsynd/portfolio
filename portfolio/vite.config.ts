import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@atoms",
        replacement: resolve(__dirname, "src/components/atoms/"),
      },
      {
        find: "@molecules",
        replacement: resolve(__dirname, "src/components/molecules/"),
      },
      {
        find: "@organisms",
        replacement: resolve(__dirname, "src/components/organisms/"),
      },
      {
        find: "@data",
        replacement: resolve(__dirname, "src/static/data/data.json"),
      },
      {
        find: "@color",
        replacement: resolve(__dirname, "src/static/colors/color.json"),
      },
      {
        find: "@font",
        replacement: resolve(__dirname, "src/static/fonts/font.json"),
      },
      {
        find: "@icon",
        replacement: resolve(__dirname, "src/static/images/icon/"),
      },
      {
        find: "@image",
        replacement: resolve(__dirname, "src/static/images/image/"),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
