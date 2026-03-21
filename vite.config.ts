import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, '.'),
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
  },
})
