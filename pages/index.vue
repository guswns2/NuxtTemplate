<script setup lang="ts">
const layoutType = inject('layoutType') as Ref<string>;

// setup()
navigateTo({ path: `/${layoutType.value}` });
</script>

<template>
  <div>
    <h1>index page</h1>
  </div>
</template>

<style lang="scss" scope></style>
