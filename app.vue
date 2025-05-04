<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

const data = {
  layout: ref<'default' | 'login' | 'main'>('default')
};

// setup()
data.layout.value = 'main';
onMounted(() => {
  runtimeConfig.public.apiBase = '/api2';
  appConfig.title = 'Hello Nuxt 2';
  console.log(runtimeConfig.public.apiBase);
  console.log(appConfig.title);
});
</script>

<template>
  <div style="width: 100vw; height: 100vh">
    <NuxtLayout :name="data.layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss"></style>
