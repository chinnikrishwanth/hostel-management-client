import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Copy _redirects file to dist folder
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // This ensures the _redirects file is copied
  publicDir: 'public'
})