import axios from 'axios'

export default class SearchService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static searchMovie = async function(string, page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${string}&page=${page}&include_adult=false`)
        return response
    }

    static searchTvShow = async function(string, page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.key}&language=en-US&query=${string}&${page}&include_adult=false`)
        return response
    }

    static searchPeople = async function(string, page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${this.key}&language=en-US&query=${string}&page=${page}&include_adult=false`)
        return response
    }

}