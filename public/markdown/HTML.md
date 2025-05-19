# HTML

## DOM

## Markdown

### .md 파일 렌더링

```bash
npm install marked
```

<br>

```typescript
// nuxt.config.ts
vite: {
  assetsInclude: ['**/*.md']; // 마크다운 파일을 문자열로 파싱
}

// pages/**.vue
import markdownContent from '~/public/markdown/**.md?raw';
```

<br>

https://marked.js.org/

### 코드블럭 스타일 적용

```bash
npm install highlight.js
```

<br>

```typescript
// MardwonContent.vue
import 'highlight.js/styles/github-dark.css'; // or another theme
```

<br>

https://highlightjs.org/

## Event
