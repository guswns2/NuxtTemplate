<script setup lang="ts">
import markdownContent from '~/README.md?raw';
</script>

<template>
  <div>
    <h1>nuxt page</h1>
    <MarkdownContent :rawMarkdown="markdownContent"></MarkdownContent>
  </div>
</template>

<style lang="scss" scope>
.markdown-content {
  border-radius: 5px;
  background-color: #f7f6f3;
  padding: 8px;
}
</style>
