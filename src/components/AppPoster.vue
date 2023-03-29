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
    <h5>{{ title }}</h5>
    <h6>{{ originalTitle }}</h6>
    <div>{{ lenguage }}</div>
    <div>{{ valutation }}</div>
</template>



<style lang="scss" scoped></style>