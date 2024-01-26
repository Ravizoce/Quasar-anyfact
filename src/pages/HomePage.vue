<template>
  <div class="q-pa-md" style="width:100%">
    <q-table flat bordered title="Any News" :rows="News.List.data" :columns="columns" :row-key="index" separator="cell"
      :pagination='pagination' :loading="News.List.data == undefined" :rows-per-page-options="[24]">

      <template v-slot:body-cell-Image="props">
        <q-td key="Image" :props="props" style="height: fit-content; width: fit-content;">
          <img :src="props.row.image" style="height: 140px; max-width: 150px" alt="">
        </q-td>
      </template>
      <template v-slot:body-cell-PublisherName="props">
        <q-td key="PublisherName" :props="props" style="height: fit-content; width: fit-content;">
          <div class="row flex-center">
            <img :src="props.row.publisher_image" style="height: 40px; max-width: 50px" alt="">
            {{ props.row.publisher_name }}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-Categories="props">
        <q-td key="PublisherName" :props="props" style="height: fit-content; width: fit-content;">
          <ul>
            <li v-for="(categorie, index) in props.row.categories" :key="index">
              {{ categorie.category_name }}
            </li>
          </ul>
        </q-td>
      </template>
      <template v-slot:body-cell-Action="props">
        <q-td key="PublisherName" :props="props" style="height: fit-content; width: fit-content;">
          <q-btn rounded flat :to="{ name: 'about', params: { id: props.row.id }, props: { id: props.row.id } }"
            @click="savevalue(props.row)" icon="visibility" />
        </q-td>
      </template>

    </q-table>
  </div>
</template>

<script setup>
import { UseAnyfactStore } from 'src/stores/Composition';
import { ref, onMounted } from 'vue';

const News = UseAnyfactStore();

const selected = false;

const columns = [
  {
    name: 'index',
    label: '#',
    field: row => row.id
  },
  {
    name: 'Image',
    required: true,
    label: 'Image',
    align: 'center',
    field: row => row.image,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'Title',
    required: true,
    label: 'Title',
    align: 'left',
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'Description',
    required: true,
    label: 'Description',
    align: 'left',
    field: row => row.meta_description,
    format: val => `${val}`,
    sortable: false,
    style: "width:10% !important; overflow-wrap: break-word;"
  },
  {
    name: 'PublisherName',
    required: true,
    label: 'Publisher Name',
    align: 'left',
    field: row => row.publisher_name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'Categories',
    required: false,
    label: 'Categories',
    align: 'left',
    field: row => row.categories.category_name,
    format: val => `${val}`,
    sortable: true,

  },
  {
    name: 'Action',
    required: false,
    label: 'Action',
    align: 'left',
    field: '',
    format: val => `${val}`,
    sortable: false,
  }
]

const pagination = {
  rowsPerPage: 25,
  firstPage: "https://api.anyafacts.com/fetch-news?page=1",
  lastPage: "https://api.anyafacts.com/fetch-news?page=3758",
  nextPage: "https://api.anyafacts.com/fetch-news?page=2"
}

// News.List.data .forEach((row, index) => {
//   row.index = index
// })

const savevalue = (data) => {
  News.DetailSetter(data);
}

// console.log(list);
</script>


<style >
::v-deep .my-class {
  width: 10% !important;
}
</style>
