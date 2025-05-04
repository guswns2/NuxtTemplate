// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // 기본 옵션
  // 호환성 날짜 설정. 해당 날짜의 Nuxt 동작 방식을 기준으로 애플리케이션 동작
  compatibilityDate: '2024-11-01',
  // Nuxt DevTools 활성화 여부. 개발 중 애플리케이션 상태 모니터링 및 디버깅 도구
  devtools: {
    enabled: true
  },

  // 개발 서버 port 설정
  //  devServer: {
  //   port: 3001
  // },

  // Vite 설정
  vite: {
    resolve: {
      alias: {
        // 파일 경로 별칭 설정정
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },

  // SSR or SPA 설정
  ssr: true,

  // 환경 변수를 사용하여 빌드 후 지정해야 하는 개인 또는 공개 토큰
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  // Vuetify 모듈 설정
  modules: ['vuetify-nuxt-module']
  // vuetify: {
  //   moduleOptions: {
  //     /* module specific options */
  //   },
  //   vuetifyOptions: {
  //     /* vuetify options */
  //   }
  // }
});
