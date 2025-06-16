import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on mode and make them available via process.env
  const env = loadEnv(mode, process.cwd(), ''); // include all prefixes
  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
    },
  };
});
