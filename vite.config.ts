import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vuex from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'fabric-editor',
      fileName: 'fabric-editor'
    }
  },
  plugins: [vue(), vuex(), dts({
    include: "./lib",
    outDir: ["./dist"]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname)
    }
  },
})
