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
    <ul>
        <li v-for="film in store.films">
            <AppPoster :img="film.poster_path ? 'https://image.tmdb.org/t/p/w300' + film.poster_path : 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'" :title="film.title"
                :originalTitle="film.original_title" :language="film.original_language" :valutation="film.vote_average" />
        </li>
    </ul>
</template>



<style lang="scss" scoped></style>