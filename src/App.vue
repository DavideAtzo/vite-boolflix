<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  
  methods: {
    search(){
      // chiamata ai film 
      axios.get(this.store.urlFilm, {
        params: {
          api_key: store.ApiKey,
          language: store.lang,
          query: store.searchFilm
        }
      })
      .then((response) => {
        store.films = response.data.results;
        console.log(store.films);
      }),
      // chiamata alle serie tv 
      axios.get(this.store.urlSeries, {
        params: {
          api_key: store.ApiKey,
          query: store.searchFilm
        }
      })
      .then((response) => {
        store.series = response.data.results;
        console.log(store.series);
      })      
    }
  },
}
</script>

<template>
  <AppHeader @search-Film="search" />
  <AppMain />
</template>


<style lang="scss"></style>
