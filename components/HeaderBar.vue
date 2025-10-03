<script setup lang="ts">
const layoutType = inject('layoutType') as string;

interface Menu {
  title: string;
  path: string;
  child?: Menu[];
}
const mainMenuList: Menu[] = [
  {
    title: 'Language',
    path: 'language',
    child: [
      { title: 'HTML', path: 'html' },
      {
        title: 'CSS',
        path: 'css',
        child: [
          { title: 'CSS', path: 'css' },
          { title: 'SCSS', path: 'scss' },
          { title: 'TailwindCSS', path: 'tailwindcss' }
        ]
      },
      {
        title: 'Script',
        path: 'script',
        child: [
          { title: 'JavaScript', path: 'javascript' },
          { title: 'TypeScript', path: 'typescript' }
        ]
      }
    ]
  },
  {
    title: 'Project',
    path: 'project',
    child: [
      {
        title: 'Framework',
        path: 'framework',
        child: [
          { title: 'Nuxt', path: 'nuxt' },
          { title: 'Test', path: 'test' }
        ]
      },
      {
        title: 'SCM',
        path: 'scm',
        child: [{ title: 'Git', path: 'git' }]
      }
    ]
  },
  {
    title: 'Function',
    path: 'function',
    child: [{ title: 'NoticeBoard', path: 'noticeboard' }]
  }
];

const func = {
  // onMoveRoute(layoutPath: string | null, mainPath: string | null, subPath: string | null, childPath: string | null) {
  //   utils.log(layoutPath, mainPath, subPath, childPath);

  //   let path: string = `/${layoutPath}`;
  //   if (!utils.isEmpty(mainPath) && typeof mainPath === 'string') path += `/${mainPath}`;
  //   if (!utils.isEmpty(subPath) && typeof mainPath === 'string') path += `/${subPath}`;
  //   if (!utils.isEmpty(childPath) && typeof childPath === 'string') path += `/${childPath}`;

  //   navigateTo({ path: path });
  // }
  onMoveRoute(layoutPath: string | null, mainMenu: Menu | null, subMenu: Menu | null, childMenu: Menu | null) {
    utils.log(layoutPath, mainMenu, subMenu, childMenu);

    let path: string = `/${layoutPath}`;
    if (mainMenu && typeof mainMenu.path === 'string') path += `/${mainMenu.path}`;
    if (subMenu && typeof subMenu.path === 'string') path += `/${subMenu.path}`;
    if (childMenu && typeof childMenu.path === 'string') path += `/${childMenu.path}`;

    navigateTo({ path: path });
  }
};
</script>

<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title @click="func.onMoveRoute(layoutType, null, null, null)">
      <img src="~/assets/imgs/nuxt-logo.svg" alt="Discover Nuxt" width="50px" />
      NuxtTemplate
    </v-app-bar-title>

    <!-- <v-menu v-for="(mainMenu, index) in menuList" :key="index" :value="mainMenu.path">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ mainMenu.title }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(subMenu, index) in mainMenu.menuList" :key="index" :value="subMenu.path">
          <v-list-item-title @click="func.onMoveRoute(layoutType, mainMenu.path, subMenu.path, null)">{{ subMenu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->

    <v-menu v-for="(mainMenu, index) in mainMenuList" :key="index">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ mainMenu.title }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(subMenu, index) in mainMenu.child" :key="index" link>
          <v-list-item-title @click="func.onMoveRoute(layoutType, mainMenu, subMenu, null)"> {{ subMenu.title }}</v-list-item-title>
          <template v-if="subMenu.child" v-slot:append>
            <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
          </template>

          <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
            <v-list>
              <v-list-item v-for="childMenu in subMenu.child" :key="index" link>
                <v-list-item-title @click="func.onMoveRoute(layoutType, mainMenu, subMenu, childMenu)">{{ childMenu.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-menu>
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
