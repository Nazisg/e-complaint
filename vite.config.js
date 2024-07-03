import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createThemePlugin } from 'vite-plugin-theme';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createThemePlugin({
      // Theme variables
      themeVariables: {
        '@primary-color': '#3C6CB4',
      },
      // Additional options
      lessVariables: {
        javascriptEnabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
