import axios from "axios"

export default class TvShowService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getPopularTvShow = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=en&page=${page}`)
        return response
    }

    static getAiringTodayTvShow = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getOnTheAirTvShow = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getTopRatedTvShow = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getTvShowFromId = async function (tvShowId) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${this.key}&append_to_response=credits,reviews,images,videos,recommendations,aggregate_credits`)
        return response
    }
}