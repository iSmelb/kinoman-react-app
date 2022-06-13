import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchPanel() {
    const [searchRequest, setSearchRequest] = useState('')
    let navigate = useNavigate();

    const globalSearch = async () => {

        if (searchRequest.trim() === '') return

        navigate('/search', {state: {searchRequest, page: 1}, replace: true })
        setSearchRequest('')
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