<script>
import { store } from '../store';
import AppPoster from './AppPoster.vue';

export default {
    components: {
        AppPoster,
    },
    data() {
        return {
            store

        }
    }
}
</script>
<template>
    <article class="col-4 text-center mt-5" v-for="film in store.films">
        <AppPoster
            :img="film.poster_path ? 'https://image.tmdb.org/t/p/w300' + film.poster_path : 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'"
            :title="film.title" :originalTitle="film.original_title" :language="film.original_language"
            :valutation="film.vote_average" :overview="film.overview"/>
    </article>
</template>



<style lang="scss" scoped></style>