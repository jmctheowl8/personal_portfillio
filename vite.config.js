import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct asset paths when building for production
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  
})

