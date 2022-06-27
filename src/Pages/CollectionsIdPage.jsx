import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieService from '../API/MovieService'

function CollectionsIdPage() {
    const [collection, setCollection] = useState('')
    const params = useParams()
    let collectionId = params.id

    const getCol = async () => {
        const response = await MovieService.getCollectionForId(collectionId)
        setCollection(response.data)
    }
    
    useEffect(() => {
        getCol()
    }, [collectionId])


    return (
        <>
            {collection &&
                <div
                    style={{
                        background: `linear-gradient( to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${collection.backdrop_path}')`,
                        backgroundSize: 'cover'
                    }}
                    className='collection_info_bg'
                >
                    <div className='collection_info conteiner'>
                        <img src={"http://image.tmdb.org/t/p/w500" + collection.poster_path} alt={collection.name} />
                        <div className='info'>
                            <h1 className='title'>
                                <a target='_blank' href={"https://www.themoviedb.org/collection/" + collection.id}>
                                    {collection.name}
                                </a>
                            </h1>
                            {collection.overview &&
                                <div className='discriptions'>
                                    <h4>Обзор</h4>
                                    <p>{collection.overview}</p>
                                </div>}
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CollectionsIdPage