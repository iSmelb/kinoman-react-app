import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function SearchResultPanel() {
    const search = useSelector(state => state.search)
    const searchRequest = search.searchRequest
    const searchResult = search.searchResult
    //console.log(searchRequest)

    //сделать линки на вложенніе роуты, во вложеных роутах сделать контейнер и промапится по результатам, и возможно ещё раз повторный запрос на данные 

    return (
        <div className='resultPanel'>
            <h1>Search Results</h1>
            <ul className='resultList'>
                <li>
                    <Link to={`/search/movie?query=${searchRequest}`}>Movies</Link>
                    <span>
                        {searchResult.movies
                            ? searchResult.movies.total_results
                            : '0'
                        }
                    </span>
                </li>
                <li>
                    <Link to={`/search/tv?query=${searchRequest}`}>Tv Show</Link>
                    <span>
                        {searchResult.tvShow
                            ? searchResult.tvShow.total_results
                            : '0'
                        }
                    </span>
                </li>
                <li>
                    <Link to={`/search/people?query=${searchRequest}`}>People</Link>
                    <span>
                        {searchResult.people
                            ? searchResult.people.total_results
                            : '0'
                        }
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default SearchResultPanel