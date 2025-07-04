import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: parseInt(process.env.PORT) || 5173,
    allowedHosts: ['photographerportfolio-ioua.onrender.com'], // ✅ Fix for blocked host
  },
});
