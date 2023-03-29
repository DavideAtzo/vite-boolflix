<script>
import AppSearch from './AppSearch.vue';
export default {
    components: {
        AppSearch
    },
    methods: {
        handleSearch() {
            this.$emit('searchFilm');
        }
    }
}
</script>

<template>
    <AppSearch @searchInput="handleSearch" />
</template>



<style lang="scss" scoped></style>