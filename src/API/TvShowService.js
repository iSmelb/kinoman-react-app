import axios from "axios"


export default class TvShowService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getPopularTvShow = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }
}