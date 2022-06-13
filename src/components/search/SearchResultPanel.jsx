import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function SearchResultPanel() {
    const search = useSelector(state => state.search)
    const [switchPanel, setSwithPanel] = useState(false)
    const searchRequest = search.searchRequest
    const searchResult = search.searchResult
    //console.log(searchRequest)

    const showResPanel = () => {
        setSwithPanel(!switchPanel)
        document.body.classList.toggle('stop-scrolling')
    }

    //сделать линки на вложенніе роуты, во вложеных роутах сделать контейнер и промапится по результатам, и возможно ещё раз повторный запрос на данные 

    return (
        <div className={`wrapperResultPanel ${switchPanel ? 'show' : ''}`}>
            <div className='resultPanel'>
                <h1>Search Results</h1>
                <ul className='resultList'>
                    <li>
                        <NavLink className='link' to={`/search/movies?query=${searchRequest}&page=1`}>
                            <span className='name'>Movies</span>
                            <span className='count'>
                                {searchResult.movies
                                    ? searchResult.movies.total_results
                                    : '0'
                                }
                            </span>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink className='link' to={`/search/tv?query=${searchRequest}&page=1`}>
                            <span className='name'>Tv Show</span>
                            <span className='count'>
                                {searchResult.tvShow
                                    ? searchResult.tvShow.total_results
                                    : '0'
                                }
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={`/search/people?query=${searchRequest}&page=1`}>
                            <span className='name'>People</span>
                            <span className='count'>
                                {searchResult.people
                                    ? searchResult.people.total_results
                                    : '0'
                                }
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <button className='toggleHidePanel' onClick={showResPanel}>
                    <span className='arrow' />
                </button>
            </div>
        </div>
    )
}

export default SearchResultPanel