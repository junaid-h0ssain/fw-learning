import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      // Proxy local requests starting with /api/quote to the external API
      '/api/quote': {
        target: 'https://api.quotable.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/quote/, '/random'),
      },
    },
  },
})
