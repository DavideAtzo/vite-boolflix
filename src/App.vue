<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },
  
  methods: {
    search(){
      axios.get(this.store.urlFilm, {
        params: {
          api_key: store.ApiKey,
          query: store.searchFilm
        }
      })
      .then((response) => {
        store.films = response.data.results;
        console.log(store.films);
      })      
    }
  },
}
</script>

<template>
  <AppMain @search-Film="search"/>
</template>


<style lang="scss"></style>
