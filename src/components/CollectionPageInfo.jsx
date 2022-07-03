import React from 'react'
import CollectionBanner from './UI/collections/CollectionBanner'
import { useSelector } from 'react-redux'
import MoviePreview from './UI/PreviewReusable/MoviePreview'

function CollectionPageInfo() {
    const collection = useSelector(state => state.collection.collectionInfo)
    const sortedCollection = [...collection.parts].sort(sortCollection('release_date'))

    function sortCollection(field) {
        return (a, b) => {

            if (a[field] === '') return 1
            if (b[field] === '') return -1

            return a[field] > b[field] ? 1 : -1;
        }  
    }

    return (
        <div className='collectionPageInfo'>
            <CollectionBanner collection={collection}/>
            <div className='conteiner'>
                {sortedCollection.map(movie => <MoviePreview key={movie.id} movie={movie} sizeImg='size94and141' discriptions />)}
            </div>
        </div>
    )
}

export default CollectionPageInfo