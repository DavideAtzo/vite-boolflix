<script>
import AppHeader from './AppHeader.vue';
import AppFilmList from './AppFilmslist.vue';
import AppSeriesList from './AppSeriesList.vue';
export default {
    components: {
        AppHeader,
        AppFilmList,
        AppSeriesList
    },
    emits: ["searchFilm"],
    methods: {
        handleSearch() {
            this.$emit('searchFilm');
        }
    }
}
</script>

<template>
    <AppHeader @searchInput="handleSearch"/>
    <AppFilmList />
    <AppSeriesList />
</template>



<style lang="scss" scoped></style>