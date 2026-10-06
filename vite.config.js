import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ 
    jsxRuntime: 'automatic',
    babel: {
      babelrc: false,
      configFile: false,
    }
  })],
  server: {
    middlewareMode: false,
  }
})
