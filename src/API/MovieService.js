import theMovieDb from 'themoviedb-javascript-library'

export default class MovieService {
    static key = '0360c9c9a3fc78d9c7356748cda8f62d'

    static getMovie = async function(pageId = 1, afterRespon, afterError) {
        theMovieDb.common.api_key = this.key
        theMovieDb.movies.getPopular({language: 'ru', page: pageId, }, afterRespon, afterError)
    }

    static getMovieFromId = async function(movieId, afterRespon, afterError) {
        theMovieDb.common.api_key = this.key
        theMovieDb.movies.getById({id: movieId, language: 'ru'}, afterRespon, afterError)
    }

    static getImagesForMovie = async function (movieId, afterRespon, afterError) {
        theMovieDb.common.api_key = this.key
        theMovieDb.movies.getImages({id: movieId, language: 'ru'}, afterRespon, afterError)
    }

    static getCollectionForId = async function (collectionId, afterRespon, afterError) {
        theMovieDb.common.api_key = this.key
        theMovieDb.collections.getDetails({id: collectionId, language: 'ru'}, afterRespon, afterError)
    }
}