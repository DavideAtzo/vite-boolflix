<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'poster',
    components: {
        CountryFlag
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        valutation: Number
    }
}
</script>

<template>
    <h5>Titolo: {{ title }}</h5>
    <h6>Titolo originale: {{ originalTitle }}</h6>
    <div>lingua originale:{{ language }}</div>
    <div>Voto: {{ valutation }}</div>
    <country-flag country='hr' size='normal'/>
</template>



<style lang="scss" scoped></style>