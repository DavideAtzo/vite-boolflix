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
            <AppPoster :img="`https://image.tmdb.org/t/p/w300${ film.backdrop_path }`" :title="film.title"
                :originalTitle="film.original_title" :language="film.original_language" :valutation="film.vote_average" />
        </li>
    </ul>
</template>



<style lang="scss" scoped></style>