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
    <header>
        <input type="text" id="search-bar" placeholder="Cerca film" v-model="store.searchFilm">
        <button type="button" @click.="$emit('search-Film')">cerca</button>
    </header>
</template>

<style lang="scss" scoped></style>