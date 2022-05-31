import React from 'react'
import { Link } from 'react-router-dom'

function CollectionsPoster({ collectionInfo }) {

  return (
    <section className='collections'>
      <div
        style={{
          background: `linear-gradient( to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('http://image.tmdb.org/t/p/w1440_and_h320_multi_faces/${collectionInfo.backdrop_path}') no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='collections_poster'
      >
        <h2>Входит в "{collectionInfo.name}"</h2>
        <Link to={`/collections/${collectionInfo.id}`}>Смотреть коллекцию</Link>
      </div>
    </section>
  )
}

export default CollectionsPoster