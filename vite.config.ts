import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 9097;


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build",
    sourcemap: false,
  },
  preview: {
    port: port,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
