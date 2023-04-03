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
        <div class="info-box">
            <div class="info-text px-3">
                <h5 class="my-3">Titolo: {{ title }}</h5>
                <h6>Titolo originale: {{ originalTitle }}</h6>
                <div>Lingua originale: <country-flag :country=getFlag() size='normal' class="flag mb-1" /></div>
                <div class="my-2">
                    <font-awesome-icon class="stars" icon="fa-solid fa-star" v-for="n in getStars(valutation)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - getStars(valutation))" />
                </div>
                <p class="mx-3 mb-4">Descrizione: {{ overview }}</p>
            </div>
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

.info-box {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: .5s ease;
    background-color: $secondary;
    top: 0px;
    left: 25px;
    right: 80px;
    bottom: -5px;
    color: $text-color;
    overflow-y: auto;
}

.info-text {
    font-size: 20px;
    position: absolute;
}

.flag {
    vertical-align: middle;
}

.stars {
    color: yellow;
}

.big-poster:hover .info-box {
    width: 88%;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: $background;
    border-radius: 10px;
}

</style>