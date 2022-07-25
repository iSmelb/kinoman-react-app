import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CollectionsPoster() {
  const collectionInfo = useSelector(state => state.movie.movie.belongs_to_collection)
  const linkId = collectionInfo?.id + '-' + collectionInfo?.name.replace(/\s/g, '-')
  
  if(!collectionInfo) {
    return (
      <>
      </>
    )
  }

  return (
    <section className='collections'>
      <div
        style={{
          backgroundImage: `linear-gradient( to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('https://image.tmdb.org/t/p/w1440_and_h320_multi_faces/${collectionInfo.backdrop_path}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='collections_poster'
      >
        <h2>Part of the "{collectionInfo.name}"</h2>
        <Link to={`/collections/${linkId}`}>View the collection</Link>
      </div>
    </section>
  )
}

export default CollectionsPoster