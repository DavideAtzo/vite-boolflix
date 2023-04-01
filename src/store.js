import { reactive } from "vue";

export const store = reactive({
    films: [],
    series: [],
    lang: "it-IT",
    searchFilm: '',
    ApiKey:'6dd78158f01daaa583889468c6b62b1a',
    urlFilm: 'https://api.themoviedb.org/3/search/movie?',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?',
    errorImg: '../assets/scss/img/HD-wallpaper-error-glitch.jpg'
})