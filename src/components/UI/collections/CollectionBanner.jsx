import React from 'react'

function CollectionBanner({collection}) {
    return (
        <section
            style={{
                backgroundImage: `linear-gradient( to right, rgba(6, 17, 26, 0.9) 0%, rgba(6, 17, 26, 0.9) 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${collection.backdrop_path}')`,
                backgroundSize: 'cover'
            }}
            className='collection_info_bg'
        >
            <div className='collection_info conteiner'>
                <img loading='lazy' src={"https://image.tmdb.org/t/p/w500" + collection.poster_path} alt={collection.name} />
                <div className='info'>
                    <h1 className='title'>
                        <a target='_blank' rel="noreferrer" href={"https://www.themoviedb.org/collection/" + collection.id}>
                            {collection.name}
                        </a>
                    </h1>
                    {collection.overview &&
                        <div className='discriptions'>
                            <h3>Overview</h3>
                            <p>{collection.overview}</p>
                        </div>
                    }
                    <div className='number_of_movies'>
                        <span>Number of Movies: {collection.parts.length}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollectionBanner