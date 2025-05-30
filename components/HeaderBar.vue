<script setup lang="ts">
const layoutType = inject('layoutType') as string;

const menuList = [
  {
    title: 'Language',
    path: 'language',
    menuList: [
      { title: 'HTML', path: 'html' },
      { title: 'JavaScript', path: 'javascript' },
      { title: 'TypeScript', path: 'typescript' },
      { title: 'CSS', path: 'css' },
      { title: 'SCSS', path: 'scss' }
    ]
  },
  {
    title: 'Project',
    path: 'project',
    menuList: [
      { title: 'Nuxt', path: 'nuxt' },
      { title: 'Git', path: 'git' },
      { title: 'Test', path: 'test' }
    ]
  },
  {
    title: 'Function',
    path: 'function',
    menuList: [{ title: 'NoticeBoard', path: 'noticeboard' }]
  }
];

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
    <v-app-bar-title @click="func.onMoveRoute(layoutType, null, null)">
      <img src="~/assets/imgs/nuxt-logo.svg" alt="Discover Nuxt" width="50px" />
      NuxtTemplate
    </v-app-bar-title>

    <v-btn color="primary" v-for="(mainMenu, index) in menuList" :key="index" :value="mainMenu.path">
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
</template>

<style lang="scss" scope>
.v-toolbar__content > .v-toolbar-title {
  margin: 0 30px 0 10px !important;
  flex: 0 0 auto;

  .v-toolbar-title__placeholder {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;

    img {
      margin-right: 5px;
    }
  }
}
</style>
