import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        links: resolve(__dirname, 'src/links/index.html'),
        shopee: resolve(__dirname, 'src/links/shopee.html'),
        linksNovoUno: resolve(__dirname, 'src/links-novo-uno-clube/index.html'),
        shopeeNovoUno: resolve(__dirname, 'src/links-novo-uno-clube/shopee.html')
      }
    }
  }
})