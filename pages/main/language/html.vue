<script setup lang="ts">
import markdownContent from '~/public/markdown/HTML.md?raw';
</script>

<template>
  <div>
    <MarkdownContent :rawMarkdown="markdownContent"></MarkdownContent>
  </div>
</template>

<style lang="scss" scope></style>
