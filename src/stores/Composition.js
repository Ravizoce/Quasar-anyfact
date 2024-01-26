import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { data } from 'autoprefixer';

export const UseAnyfactStore = defineStore('AnyfactStore', () => {

  const api = 'https://api.anyafacts.com/fetch-news?rowsPerPage=24';

  const data = {};
  const List = ref(data);
  const Current = ref(data);
  const NEWSSetter = async () => {
    try {
      let dataGetter = await fetch(api);
      let jasonData = await dataGetter.json();
      List.value = jasonData;
    } catch (error) {
      console.error("error", error);
    }
  }
  const DetailSetter = (Data) => {
    Current.value = Data;
  }
  const Load_DetailSetter = async (ID) => {
    console.log("load setter");
    while (List.value.data == undefined) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (News.Current.length !== undefined) {
        return;
      }
    }
    List.value.data.forEach(element => {
      if (element.id == ID) {
        Current.value = element;
      }
    });
  }
  return { List, Current, NEWSSetter, DetailSetter, Load_DetailSetter }
})
