<script>
import AppHeader from './AppHeader.vue';
export default {
    components: {
        AppHeader
    },
    methods: {
        handleSearch() {
            this.$emit('searchFilm');
        }
    }
}
</script>

<template>
    <AppHeader @searchInput="handleSearch"/>
</template>



<style lang="scss" scoped></style>