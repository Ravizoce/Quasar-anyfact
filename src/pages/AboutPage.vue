<style scoped>
.title {
  font-size: xxx-large;
}

.detail_content .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.detail_image img {
  width: 100%;
}

.detail_image {
  padding: 0px 20px;
}

.Detail_wrapper {
  display: flex;
  flex-direction: column;
  padding: 0px 184px;
  margin-top: 10px;
}

.detail_header {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
<style>
.detail_content .content img {
  display: none !important;
}
</style>
<template>
  <div>
    <div class="back_btn">
      <q-btn class="q-mt-xl bg-blue q-ma-lg" color="white" text-color="white" unelevated icon="arrow_back" no-caps
        @click="goBack" />
    </div>
    <div>
      <div class="Detail_wrapper">
        <div class="detail_header">
          <div class="title">{{ News.Current.title }}</div>
        </div>
        <div class="detail_image">
          <img :src="News.Current.image" alt="">
        </div>
        <div class="detail_content">
          <div v-html="News.Current.content" class="content">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UseAnyfactStore } from 'src/stores/Composition';
import { onMounted } from 'vue';
import router from 'src/router';

const News = UseAnyfactStore();

const props = defineProps(['id']);

const goBack = () => router().go(-1);

const id = props.id;


onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(News.Current.length == undefined);
  if (News.Current.length == undefined) {
    await News.Load_DetailSetter(id);
  }
})

</script>
