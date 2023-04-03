<script>
// importo axios che mi servirà per estrapolare da un link degli elementi 
import axios from 'axios';
// importo lo store dove sono presenti gli elementi che mi serviranno 
import { store } from './store';
// importo header e main che dovranno comparire in pagina 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain
  },
  // elementi dichiarati 
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
      // inserimento dati nell'array films presente nello store
      .then((response) => {
        store.films = response.data.results;
        console.log(store.films);
      }),
      // chiamata alle serie tv 
      axios.get(this.store.urlSeries, {
        params: {
          api_key: store.ApiKey,
          language: store.lang,
          query: store.searchFilm
        }
      })
      // inserimento dati nell'array series presente nello store
      .then((response) => {
        store.series = response.data.results;
        console.log(store.series);
      })      
    }
  },
}
</script>

<template>
  <!-- evento click sul bottone che scatena la ricerca  -->
  <AppHeader @search-Film="search" />
  <AppMain />
</template>


<style lang="scss"></style>
