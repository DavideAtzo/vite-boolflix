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
                case 'ja':
                    return 'jp';
                case 'zh':
                    return 'cn';
                case 'hi':
                    return 'in';
                default:
                    return this.language;
            }
        },
        getStars(valutation) {
            return (Math.ceil(valutation / 2))
        }
    }
}
</script>

<template>
    <article>
        <div>
            <img :src="img">
        </div>
        <h5>Titolo: {{ title }}</h5>
        <h6>Titolo originale: {{ originalTitle }}</h6>
        <div>lingua originale: <country-flag :country=getFlag() size='small' /></div>
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getStars(valutation)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - getStars(valutation))" />
        </div>
    </article>
</template>



<style lang="scss" scoped></style>