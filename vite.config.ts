import dns from 'dns';

import react from '@vitejs/plugin-react';
import { vite } from 'million/compiler';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vite({ auto: true }), react()],
  server: {
    host: 'localhost',
    port: 8888,
  },
});
