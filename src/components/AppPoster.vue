<script>
export default {
    name: 'poster',
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
</template>



<style lang="scss" scoped></style>