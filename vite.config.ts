import { defineConfig } from 'vite';
import dns from 'dns';
import million from 'million/compiler';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  server: {
    host: 'localhost',
    port: 8888,
  },
});
