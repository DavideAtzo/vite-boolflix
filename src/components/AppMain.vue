<script>
import AppHeader from './AppHeader.vue';
import AppFilmList from './AppFilmslist.vue';
export default {
    components: {
        AppHeader,
        AppFilmList
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
</template>



<style lang="scss" scoped></style>