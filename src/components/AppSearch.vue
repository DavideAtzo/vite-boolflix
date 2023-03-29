<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <input type="text" id="search-bar" placeholder="Cerca film" v-model="store.searchFilm">
    <button type="button" @click.="$emit('searchInput')">cerca</button>
</template>

<style lang="scss" scoped></style>