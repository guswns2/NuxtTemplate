# Nuxt

## 빌드 도구, 번들러

Nuxt.js 3는 기본적으로 Vite를 빌드 도구로 사용

설정을 통해 Vite 대신 Webpack도 선택적으로 사용 가능

<br>
🔧 빌드 도구 (Build Tool)

정의: 프론트엔드 프로젝트를 개발 → 배포 가능한 형태로 만드는 전체 프로세스를 자동화하는 도구

기능:
코드 번들링, 코드 변환(예: TypeScript → JS, Sass → CSS), 압축, 이미지 최적화, dev 서버 실행(HMR 등), 파일 복사, 환경변수 처리 등

종류: Vite, Parcel, Gulp, Webpack (Webpack은 빌드 도구이자 번들러)

<br>
📦 번들러 (Bundler)
정의: 여러 개의 JS/TS/CSS 모듈을 하나의 파일 또는 몇 개의 파일로 묶어주는 도구

기능: import/export 분석, dependency graph 생성, 트리 셰이킹, 코드 분할

종류: Webpack, Rollup, ESBuild

<br>
✅ Webpack
빌드 도구 O, 번들러 O

자신이 직접 번들링 로직을 내장

의존성 그래프 분석, 번들 생성, 트리 셰이킹 등 모두 자체적으로 수행

<br>
✅ Vite
빌드 도구 O, 번들러 X

대신 내부적으로 ESBuild(개발 시)와 Rollup(프로덕션 빌드 시)을 사용

개발 서버 (dev): ESBuild를 써서 빠르게 모듈을 변환

빌드 시 (build): Rollup을 이용해 최종 번들 파일 생성

## 프로젝트 버전

### Nuxt, Vue 버전 업데이트

```bash
npm list nuxt, vue    // 현재 버전 확인
npm show nuxt version, vue version    // 최신 버전 확인
npm remove nuxt, vue    // nuxt, vue 삭제
npm install nuxt@(버전), vue@(버전)     // 특정 버전 설치
npm install nuxt@latest vue@latest    // 최신 버전 설치
```

### npm 버전 업데이트

```bash
npm -v    // 현재 버전 확인
npm view npm version    // 최신 버전 확인
npm install -g npm@(버전)    // 특정 버전으로 변경
npm install -g npm    // 최신 버전 설치
```

## 프로젝트 설정

### nuxt.config.ts

nuxt.config.ts 변경사항은 실시간으로 반영됨

#### 파일 경로 별칭 설정

```typescript
// nuxt.config.ts
import { fileURLToPath } from 'url'

vite: {
    resolve: {
        alias: {
            // 파일 경로 별칭 설정
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
},

```

Error: 'url' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts(2307)

Nuxt 3는 브라우저 중심이지만, fileURLToPath는 Node.js 전용 함수

TypeScript는 이 함수를 사용할 때 node 타입 정의가 있어야 함

하지만 프로젝트의 tsconfig.json에 "node" 타입이 빠져 있으면 이 에러가 발생

```bash
npm install --save-dev @types/node
```

### 그 외

TypeScript 설정 - tsconfig.json

Prettier 설정 - settings.json, .prettierrc.json

Code Snippet 설정 - 파일 > 기본 설정 > 코드 조각 설정

폴더 구조 정리

그 외 Lint 설정, .env 환경 변수 설정 등

## Vue.js 3 라이프사이클

setup(): 컴포넌트 생성 시, 가장 먼저 실행됨 (Vue2의 created, beforeCreate가 통합됨)

onBeforeMount(): DOM에 마운트되기 전

onMounted(): DOM에 마운트된 후 (렌더링 완료)

onBeforeUpdate(): 반응형 상태가 바뀌어 DOM 업데이트 직전

onUpdated(): DOM 업데이트 직후

onBeforeUnmount(): 컴포넌트가 제거되기 직전

onUnmounted(): 컴포넌트가 완전히 제거된 후
