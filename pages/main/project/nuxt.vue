<script setup lang="ts">
import { marked } from 'marked';

const rawMarkdown = ref(`# 제목
**굵게**, _기울임_, [링크](https://example.com)

\`\`\`java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
\`\`\``);
const compiledMarkdown = computed(() => marked(rawMarkdown.value));
</script>

<template>
  <div>
    <h1>nuxt page</h1>
    <div v-html="compiledMarkdown" class="markdown-content" />
  </div>
</template>

<style lang="scss" scope>
.markdown-content {
  border-radius: 5px;
  background-color: #f7f6f3;
  padding: 8px;
}
</style>
