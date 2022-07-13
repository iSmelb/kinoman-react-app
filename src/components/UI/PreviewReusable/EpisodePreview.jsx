import React from 'react'

const unknownImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
const pathImg227and127 = 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2'
const pathImg640and360 = 'https://www.themoviedb.org/t/p/w640_and_h360_bestv2'

function EpisodePreview({ episode, sizeImg = 'size227and127' }) {
    const allSize = {
        size227and127: pathImg227and127,
        size640and360: pathImg640and360,
    }

    return (
        <div className='episodePreview'>
            <div className='poster'>
                {!episode.still_path
                    ? <img src={unknownImg} alt={episode.name + " Poster"} />
                    : <picture>
                        <source loading='lazy' srcSet={allSize.size640and360 + episode.still_path} media="(max-width: 600px)" />
                        <img
                            loading='lazy'
                            src={allSize[sizeImg] + episode.still_path}
                            alt={episode.name + " Poster"}
                        />
                    </picture>
                }
            </div>
            <div className='title_date'>
                <h4>{episode.episode_number}.{episode.name} <span>({episode.runtime}m)</span></h4>
                {episode.air_date &&
                    <time dateTime={episode.air_date}>
                        {episode.air_date}
                    </time>
                }
                {episode.overview && <p>{episode.overview}</p>}
            </div>
        </div>
    )
}

export default EpisodePreview