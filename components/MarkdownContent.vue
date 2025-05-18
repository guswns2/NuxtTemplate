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

<style lang="scss" scope></style>
