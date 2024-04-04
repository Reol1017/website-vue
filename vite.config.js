import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver(), ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        }),
        ElementPlusResolver()
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-6': '#00FF00',
        },
        javascriptEnabled: true,
      }
    }
  },
})
