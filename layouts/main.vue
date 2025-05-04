<script setup lang="ts"></script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>NuxtTemplate</v-app-bar-title>
  </v-app-bar>
  <slot />
</template>

<style lang="scss" scope></style>
