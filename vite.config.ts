import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project page: https://viewus.github.io/viewus/
// If this repo is ever renamed to "<org>.github.io", change base to '/'.
export default defineConfig({
  base: '/viewus/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
