<script>
import { store } from '../store';
import AppFilmList from './AppFilmslist.vue';
import AppSeriesList from './AppSeriesList.vue';
export default {
    components: {
        AppFilmList,
        AppSeriesList
    },
    data() {
        return {
            store,
            showTitle: 20
        }
    }

}
</script>

<template>
    <main>
        <section id="section-movies" class="container">
            <div id="films" v-show="store.films.length === showTitle">
                <h1 class="mt-5 mx-4">Film trovati:</h1>
            </div>
            <div class="row">
                <AppFilmList />
            </div>
        </section>
        <section id="section-series" class="container mb-3">
            <div id="films" v-show="store.series.length === showTitle">
                <h1 class="mt-5 mx-4">Film trovati:</h1>
            </div>
            <div class="row">
                <AppSeriesList />
            </div>

        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;
main{
    padding-bottom: 6.25rem;
    h1{
        text-transform: uppercase;
        text-decoration: underline;
        font-weight: 700;
        color: $secondary;
        
    }
}
</style>