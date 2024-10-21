import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If there are any import path issues
      'react-router-dom': 'react-router-dom',
    },
  },
});
