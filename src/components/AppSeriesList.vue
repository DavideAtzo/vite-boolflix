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
    <ul>
        <li v-for="series in store.series">
            <AppPoster :img="`https://image.tmdb.org/t/p/w300${ series.poster_path }`" :title="series.name" :originalTitle="series.original_title" :language="series.original_language"
                :valutation="series.vote_average" />
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>