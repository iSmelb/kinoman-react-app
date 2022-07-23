import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersonIdPageInfo from '../components/PersonIdPageInfo';
import Loader from '../components/UI/loader/Loader';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState, getPersonFromId } from '../redux/reducers/personSlice';


function PersonIdPage() {
    const params = useParams()
    const personId = params.id
    const dispatch = useDispatch()
    const { person, isLoading, error } = useSelector(state => state.person)

    useEffect(() => {
        dispatch(getPersonFromId(personId))
        window.scrollTo(0, 0)
    }, [personId])

    useEffect(() => {
        return () => dispatch(clearState())
    },[])

    useUpdateTitle(person?.name, [person])

    return (
        <>
            {isLoading && <div><Loader/></div>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {person && <PersonIdPageInfo/>}
        </>
    )
}

export default PersonIdPage