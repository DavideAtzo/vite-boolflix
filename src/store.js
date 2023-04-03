import { reactive } from "vue";

export const store = reactive({
    // array che conterrà i film e serie trovate 
    films: [],
    series: [],
    // ricerca per parametro (lingua) 
    lang: "it-IT",
    // ricerca per chiave 
    searchFilm: '',
    // elementi per la ricerca di axios 
    ApiKey:'6dd78158f01daaa583889468c6b62b1a',
    urlFilm: 'https://api.themoviedb.org/3/search/movie?',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?',
    errorImg: '../assets/scss/img/HD-wallpaper-error-glitch.jpg'
})