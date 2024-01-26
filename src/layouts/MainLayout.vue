<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title align="center">
          Any News
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered elevated overflow-hidden>
      <q-list>
        <q-item-label header class="bg-brown text-h5 text-blue">
          Navigtion
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="scroll window-height">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'home',
    target: '_self',
    link: '/home'
  },
  {
    title: 'Error',
    caption: 'error',
    icon: 'report_gmailerrorred',
    target: '_self',
    link: '/error'
  },
  // {
  //   title: 'About',
  //   caption: 'about',
  //   icon: 'info',
  //   target: '_self',
  //   link: ''
  // }

]

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
