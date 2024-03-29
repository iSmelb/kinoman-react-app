import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CollectionPageInfo from '../components/collectionPage/CollectionPageInfo'
import Loader from '../components/UI/loader/Loader'
import { useUpdateTitle } from '../hooks/useUpdateTitle'
import { clearState, getCollectionForId } from '../redux/reducers/collectionSlice'

function CollectionsIdPage() {
    const params = useParams()
    const collectionId = params.id
    const {error, isLoading, collectionInfo} = useSelector(state => state.collection)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCollectionForId(collectionId))
        window.scrollTo(0, 0)
    }, [collectionId])

    useEffect(() => {
        return () => dispatch(clearState())
    },[])

    useUpdateTitle(collectionInfo?.name, [collectionInfo])

    return (
        <>
            {isLoading && <Loader/>}
            {error && <div style={{ textAlign: 'center' }}>{error}</div>}
            {collectionInfo && <CollectionPageInfo/>}
        </>
    )
}

export default CollectionsIdPage