import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: false,
    strictPort: true
  },
  optimizeDeps: {
    entries: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    exclude: []
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  }
})
