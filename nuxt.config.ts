// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  // 기본 옵션
  compatibilityDate: '2024-11-01', // 호환성 날짜 설정. 해당 날짜의 Nuxt 동작 방식을 기준으로 애플리케이션 동작
  devtools: {
    // Nuxt DevTools 활성화 여부. 개발 중 애플리케이션 상태 모니터링 및 디버깅 도구
    enabled: true
  },

  // 개발 서버 port 설정
  //  devServer: {
  //   port: 3001
  // },
  vite: {
    // Vite 설정
    resolve: {
      alias: {
        // 파일 경로 별칭 설정정
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  // SSR or SPA 설정
  ssr: true
});
