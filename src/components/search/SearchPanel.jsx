import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchPanel() {
    const [searchRequest, setSearchRequest] = useState('')
    let navigate = useNavigate();
    const [hideInput, setHideInput] = useState(true)
    const inputRef = useRef('')

    const showInput = (e) => {
        e.stopPropagation()
        window.innerWidth <= 900 && setHideInput(prev => !prev)
        setTimeout(() => inputRef.current.focus(), 0)
    }

    const globalSearch = async (e) => {
        e.preventDefault()
        if (searchRequest.trim() === '') return

        navigate(`/search?query=${searchRequest}&page=1`, { state: { searchRequest, page: 1 } })
        setSearchRequest('')
        if (!hideInput) {
            setHideInput(prev => !prev)
        }
    }

    useEffect(() => {
        // закрывает поиск при клике в не его 
        const clickAnyToclose = () => {
            setHideInput(true)
        }
        if (window.innerWidth <= 900) {
            document.body.addEventListener('click', clickAnyToclose)
        }
        return () => document.body.removeEventListener('click', clickAnyToclose)
    }, [])

    return (
        <form className={`block_for_search ${!hideInput ? 'showInput' : ''}`} onSubmit={globalSearch}>
            <div className='button_search' onClick={showInput}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
                ref={inputRef}
                type='search'
                placeholder='Search'
                value={searchRequest}
                onChange={e => setSearchRequest(e.target.value)}
                onClick={e => e.stopPropagation()}
            />
        </form>
    )
}

export default SearchPanel