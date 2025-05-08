<script setup lang="ts">
const layoutType = inject('layoutType') as string;

// setup()
// app.vue의 layout 값에 따라 라우팅 경로 설정
navigateTo({ path: `/${layoutType}` });
</script>

<template>
  <div>
    <h1>index page</h1>
  </div>
</template>

<style lang="scss" scope></style>
