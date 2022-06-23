import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI/loader/Loader';
import PeoplePageContent from '../components/UI/people_info_reusable/PeoplePageContent';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { getPopularPeople } from '../redux/reducers/peopleSlice';

function PopularPeoplePage() {
    const {populars, isLoading, error}  = useSelector(state => state.people)
    const people = populars?.results
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(page + 1)
    }
    
    useEffect(() => {
        dispatch(getPopularPeople(page))
    }, [page])

    useUpdateTitle('people-popular')

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div>{error}</div>}
            {people && <PeoplePageContent peopleList={people} changePage={nextPage} type='popular'/>}
        </>
    )
}

export default PopularPeoplePage