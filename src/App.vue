<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader
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
  <AppHeader @searchFilm="search"/>
</template>


<style lang="scss"></style>
