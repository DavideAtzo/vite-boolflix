<script>

import AppFilmList from './AppFilmslist.vue';
import AppSeriesList from './AppSeriesList.vue';
export default {
    components: {
        AppFilmList,
        AppSeriesList
    },

}
</script>

<template>
    <main>
        <section id="section-movies" class="container">
            <div class="row">
                <!-- <h1 class="mt-5 mx-4">Film trovati:</h1> -->
                <AppFilmList />
            </div>
        </section>
        <section id="section-series" class="container mb-3">
            <div class="row">
                <!-- <h1 class="mt-5 mx-4">Serie TV trovate:</h1> -->
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