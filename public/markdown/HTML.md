# HTML

## DOM(문서 객체 모델)

웹 페이지를 스크립트 또는 프로그래밍 언어와 연결

이는 문서의 구조(예: 웹 페이지를 나타내는 HTML)를 메모리에 표현함으로써 이루어짐

일반적으로 JavaScript를 지칭하지만, HTML, SVG, 또는 XML 문서를 객체로 모델링하는 것은 핵심 JavaScript 언어의 일부가 아님

<br>

DOM은 문서를 논리적 트리로 표현

트리의 각 가지는 노드에서 끝나며, 각 노드는 객체를 포함

DOM 메서드를 사용하면 프로그래밍 방식으로 트리에 접근

이를 통해 문서의 구조, 스타일, 또는 내용을 변경

노드에는 이벤트 핸들러도 첨부 가능

이벤트가 트리거되면 이벤트 핸들러가 실행

## CORS(Cross-Origin Resource Sharing, 교차 출처 리소스 공유)

브라우저가 다른 출처(도메인, 프로토콜, 포트)의 리소스에 접근할 수 있도록 허용하는 보안 메커니즘

웹 애플리케이션이 동일 출처 정책(Same-Origin Policy)을 우회하여 다른 웹 서버에서 리소스를 가져오도록 허용하는 HTTP 헤더 기반의 방식으로 동작

<br>

img, video, script, link 태그 등

→ 기본적으로 Cross-Origin 정책을 지원함. 다른 사이트의 리소스에 접근 가능

<br>

XMLHttpRequest, Fetch API 스크립트
 → 기본적으로 Same-Origin 정책을 따름. 자바스크립트에서의 요청은 기본적으로 서로 다른 도메인에 대한 요청을 보안상 제한

<br>

<strong>CORS 정책 위반 에러 발생 시 일반적으로 백엔드 쪽에서 허용 origin 설정 필요</strong>

<br>

출처: https://inpa.tistory.com/entry/WEB-📚-CORS-💯-정리-해결-방법-👏 [Inpa Dev 👨‍💻:티스토리]

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
