import axios from 'axios'

export default class MovieService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getMovieFromId = async function(movieId) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.key}&append_to_response=credits,reviews,images,videos,recommendations`)
        return response
    }

    static getPopular = async function(page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getPlayingNow = async function(page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}&language=en-US&page=${page}&region=US`)
        return response
    }

    static getUpComing = async function(page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.key}&language=en-US&page=${page}&region=US`)
        return response
    }

    static getTopRated = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}&language=en-US&page=${page}`)
        return response
     }


    static getSimilarMovie = async function (movieId) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.key}&language=ru&page=1`)
        return response
    }

    static getCollectionForId = async function (collectionId) {
        const response = await axios.get(`https://api.themoviedb.org/3/collection/${collectionId}?api_key=${this.key}&language=ru`)
        return response
    }

    static getCreditsforMovie = async function (movieId) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.key}&language=en-US`)
        return response
    }

    static getReviewsForMovie = async function (movieId, page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getImagesForMovie = async function(movieId) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${this.key}`)
        return response
    }

    static getVideoForMovie = async function (movieId) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.key}&language=en-US`)
        return response
    }
}