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
    <article class="col-4 text-center mt-5" v-for="series in store.series">
        <AppPoster
            :img="series.poster_path ? 'https://image.tmdb.org/t/p/w342' + series.poster_path : 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg'"
            :title="series.name" :originalTitle="series.original_title" :language="series.original_language"
            :valutation="series.vote_average" :overview="series.overview"/>
    </article>
</template>

<style lang="scss" scoped></style>