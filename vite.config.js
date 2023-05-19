/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassPlugin()],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.js'],
    testMatch: ['./test/**/*.test.jsx'],
    globals: true,
  },
});
