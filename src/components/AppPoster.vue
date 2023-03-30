<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'poster',
    props: {
        img: String,
        title: String,
        originalTitle: String,
        language: String,
        valutation: Number

    },
    components: {
        CountryFlag
    },
    methods: {
        getFlag() {
            switch (this.language) {
                case "en":
                    return "gb";
                default:
                    return this.language;
            }
        },
    }
}
</script>

<template>
    <div>
        <img :src="img">
    </div>
    <h5>Titolo: {{ title }}</h5>
    <h6>Titolo originale: {{ originalTitle }}</h6>
    <div>lingua originale: <country-flag :country=getFlag() size='small' /></div>
    <div>Voto: {{ valutation }}</div>
</template>



<style lang="scss" scoped></style>