<script setup lang="ts">
import { marked } from 'marked';

const rawMarkdown = ref(`# 제목\n\n**굵게**, _기울임_, [링크](https://example.com)`);
const compiledMarkdown = computed(() => marked(rawMarkdown.value));
</script>

<template>
  <div>
    <h1>javascript page</h1>
    <div v-html="compiledMarkdown" class="markdown-content" />
  </div>
</template>

<style lang="scss" scope>
.markdown-content h1 {
  font-size: 2rem;
}
</style>
