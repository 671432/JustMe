import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/JustMe/",
  server: {
    open: "/JustMe/",  // This tells Vite to open the browser to this path after starting dev server
  }
})
