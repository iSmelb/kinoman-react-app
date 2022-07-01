import axios from 'axios'

export default class PeopleService{
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getPopularPeople = async function (page = 1) {
        const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.key}&language=en-US&page=${page}`)
        return response
    }

    static getPersonFromId = async function (personId) {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${this.key}&language=en-US&append_to_response=combined_credits,external_ids`)
        return response
    }
}
