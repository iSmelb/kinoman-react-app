import axios from 'axios'

export default class MovieService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getPopular = async function(pageId = 1) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=ru&page=${pageId}`)
        return respons
    }

    static gettop = async function () {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}&language=en-US&page=1`)
        return respons
     }

    static getMovieFromId = async function(movieId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.key}&language=ru`)
        return respons
    }

    static getSimilarMovie = async function (movieId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.key}&language=ru&page=1`)
        return respons
    }

    static getCollectionForId = async function (collectionId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/collection/${collectionId}?api_key=${this.key}&language=ru`)
        return respons
    }

    static getCreditsforMovie = async function (movieId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.key}&language=en-US`)
        return respons
    }

    static getReviewsForMovie = async function (movieId, pageId = 1) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.key}&language=en-US&page=${pageId}`)
        return respons
    }

    static getImagesForMovie = async function(movieId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${this.key}`)
        return respons
    }

    static getVideoForMovie = async function (movieId) {
        const respons = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.key}&language=en-US`)
        return respons
    }
}