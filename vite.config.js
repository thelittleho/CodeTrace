import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/CodeTrace/', // GitHub Pages 배포 시 리포지토리 이름을 입력하세요.
  server: {
    proxy: {
      '/api': {
        target: 'https://solved.ac',
        changeOrigin: true,
      }
    }
  }
})
