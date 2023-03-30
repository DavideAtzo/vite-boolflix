import { reactive } from "vue";

export const store = reactive({
    films: [],
    series: [],
    searchFilm: '',
    ApiKey:'6dd78158f01daaa583889468c6b62b1a',
    urlFilm: 'https://api.themoviedb.org/3/search/movie?',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?',
    pathImg: 'https://image.tmdb.org/t/p/w300'
})