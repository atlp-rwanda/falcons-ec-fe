/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass';

dotenv.config();

export default defineConfig(() => {
  const env = loadEnv('mock', process.cwd(), '');
  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    server: {
      port: process.env.PORT,
    },
    plugins: [react(), sassPlugin()],
    define: processEnvValues,
    test: {
      environment: 'jsdom',
      setupFiles: ['./test/setup.js'],
      testMatch: ['./test/**/*.test.jsx'],
      globals: true,
    },
  };
});
