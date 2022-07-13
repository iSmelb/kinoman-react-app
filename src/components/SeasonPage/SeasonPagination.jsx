import React from 'react'
import { Link } from 'react-router-dom'

function SeasonPagination({singleTvShow, season}) {
    const currentPageIndex = singleTvShow?.seasons.findIndex(e => e.name === season?.name)
    const prevLink = singleTvShow?.seasons[currentPageIndex - 1]?.name || 'end'
    const nextLink = singleTvShow?.seasons[currentPageIndex + 1]?.name || 'end'

    return (
        <div className='season_pagination conteiner'>
            <Link
                to={`/tv/76479/seasons/${currentPageIndex - 1}`}
                className={`prev ${currentPageIndex === 0 ? 'hide' : ''}`}
            >
                <span>&#10508; </span>{prevLink}
            </Link>
            <Link
                to={`/tv/76479/seasons/${currentPageIndex + 1}`}
                className={`next ${currentPageIndex === singleTvShow.seasons.length - 1 ? 'hide' : ''}`}
            >
                {nextLink} <span> &#10509;</span>
            </Link>
        </div>
    )
}

export default SeasonPagination