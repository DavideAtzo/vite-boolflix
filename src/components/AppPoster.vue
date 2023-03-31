<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'poster',
    props: {
        img: String,
        title: String,
        originalTitle: String,
        language: String,
        valutation: Number,
        overview: String
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
    <div class="big-poster">
        <div class="poster-img">
            <img :src="img">
        </div>
        <div class="info-text">
            <h5>Titolo: {{ title }}</h5>
            <h6>Titolo originale: {{ originalTitle }}</h6>
            <div>lingua originale: <country-flag :country=getFlag() size='small' /></div>
            <div class="my-2">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in getStars(valutation)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - getStars(valutation))" />
            </div>
            <p class="mx-3">Descrizione: {{ overview }}</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

.poster-img {
    width: 100%;

    img {
        width: 100%;
        height: 450px;
        display: block;
    }
}

.big-poster {
    padding: 0 25px;
    position: relative;

}

.info-text {
    background-color: $hover-text;
    display: none;
    padding: 0 10px;
    position: absolute;
    top: -5px;
    left: 20px;
    right: 20px;
    bottom: -5px;
    color: red;
    margin: 5px;
    overflow-y: auto;
}

.big-poster:hover .info-text {
    display: block;
}</style>