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
                <AppFilmList />
            </div>
        </section>
        <section id="section-series" class="container">
            <div class="row">
                <AppSeriesList />
            </div>

        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>