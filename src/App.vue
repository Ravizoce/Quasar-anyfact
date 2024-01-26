<script setup>
import { UseAnyfactStore } from 'stores/Composition';
import { onBeforeMount } from 'vue';

const News = UseAnyfactStore();
onBeforeMount(async () => {
  await News.NEWSSetter()
  console.log("mounted");
})

</script>
<template>
  <router-view />
</template>
