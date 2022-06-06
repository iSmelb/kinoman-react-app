import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SearchService from '../../../API/SearchService';

function SearchPanel() {
    const [searchRequest, setSearchRequest] = useState('')
    let navigate = useNavigate();

    const globalSearch = async () => {
        console.log(searchRequest)

        if (searchRequest.trim() === '') return

        const movieRespons = await SearchService.searchMovie(searchRequest)
        const tvShowResult = await SearchService.searchTvShow(searchRequest)
        const peopleResult = await SearchService.searchPeople(searchRequest)
        console.log(movieRespons)
        navigate('/search', { replace: true })
    }

    return (
        <div className='block_for_search'>
            <div className='button_search' onClick={globalSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type='search' value={searchRequest} onChange={e => setSearchRequest(e.target.value)} onKeyPress={e => {
                if (e.key === 'Enter') {
                    globalSearch()
                }
            }} />
        </div>
    )
}

export default SearchPanel