import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import vueI18n from "@intlify/vite-plugin-vue-i18n"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./locales/**"),
      runtimeOnly: false
    }),
  ]
})
