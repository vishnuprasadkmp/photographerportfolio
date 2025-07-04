import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Enables access via network
    port: parseInt(process.env.PORT) || 5173, // Uses .env or fallback
  },
})
