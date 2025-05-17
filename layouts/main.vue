<script setup lang="ts">
const layoutType = inject('layoutType') as string;

const data = {
  menuList: [
    {
      title: 'Project',
      path: 'project',
      menuList: [
        { title: 'Nuxt', path: 'nuxt' },
        { title: 'Git', path: 'git' }
      ]
    },
    {
      title: 'Language',
      path: 'language',
      menuList: [
        { title: 'JavaScript', path: 'javascript' },
        { title: 'TypeScript', path: 'typescript' },
        { title: 'CSS', path: 'css' },
        { title: 'SCSS', path: 'scss' }
      ]
    }
  ]
};

const func = {
  onMoveRoute(layoutPath: string | null, mainPath: string | null, subPath: string | null) {
    let path: string = `/${layoutPath}`;
    if (!utils.isEmpty(mainPath) && typeof mainPath === 'string') path += `/${mainPath}`;
    if (!utils.isEmpty(subPath) && typeof mainPath === 'string') path += `/${subPath}`;
    navigateTo({ path: path });
  }
};
</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title @click="func.onMoveRoute(layoutType, null, null)"> NuxtTemplate </v-app-bar-title>

    <v-btn color="primary" v-for="(mainMenu, index) in data.menuList" :key="index" :value="mainMenu.path">
      {{ mainMenu.title }}

      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="(subMenu, index) in mainMenu.menuList" :key="index" :value="subMenu.path">
            <v-list-item-title @click="func.onMoveRoute(layoutType, mainMenu.path, subMenu.path)">{{ subMenu.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </v-app-bar>

  <slot />
</template>

<style lang="scss" scope></style>
