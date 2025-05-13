import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

// Load .env
dotenv.config()

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 9097

console.log("PORT from .env:", port)

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build",
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0', // <--- bind to all network interfaces
    port: port,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0', // <--- bind to all network interfaces
    port: port,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
