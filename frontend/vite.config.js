import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: "./",

  server: {
    host: true, // allows external access
    allowedHosts: [
      "jace-portaled-intermediately.ngrok-free.dev"
    ]
  }
})
