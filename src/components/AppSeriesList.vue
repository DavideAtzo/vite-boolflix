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
    },

}
</script>

<template>
    <!-- <ul> -->
        <article v-for="series in store.series">
            <AppPoster :img="series.poster_path ? 'https://image.tmdb.org/t/p/w300' + series.poster_path : 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'" :title="series.name" :originalTitle="series.original_title" :language="series.original_language"
                :valutation="series.vote_average" />
        </article>
    <!-- </ul> -->
</template>

<style lang="scss" scoped></style>