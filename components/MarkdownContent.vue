<script setup lang="ts">
import { marked } from 'marked';

const props = defineProps<{
  rawMarkdown: string;
}>();

const compiledMarkdown = computed(() => marked(props.rawMarkdown));
</script>

<template>
  <div>
    <div v-html="compiledMarkdown" class="markdown-content" />
  </div>
</template>

<style lang="scss" scope>
.markdown-content {
  padding: 8px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid #eaecef;
    margin-bottom: 10px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 20px;
  }
}
</style>
