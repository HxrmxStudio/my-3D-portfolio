import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          drei: ["@react-three/drei"],
          react: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajusta el límite para evitar advertencias
  },
  optimizeDeps: {
    exclude: ['three-stdlib'],
  },
})
