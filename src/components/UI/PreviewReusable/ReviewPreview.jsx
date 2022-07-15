import React from 'react'
import { Link } from 'react-router-dom'
import cutText from '../../../utils/cutText'
import pathToImg from '../../../utils/pathToImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewPreview({ reviewInfo, limitSymbols = true }) {
    const maxSymbols = 100
    let shortContent
    const pathToPhoto = pathToImg(reviewInfo.author_details.avatar_path)

    if (reviewInfo.content.length > maxSymbols) {
        shortContent = cutText(reviewInfo.content, maxSymbols)
    }

    return (
        <div className='reviewPreview'>
            <div className='info'>
                <div className='photo'>
                    <Link to='user'>
                        {!reviewInfo.author_details.avatar_path
                            ? reviewInfo.author.slice(0, 1).toUpperCase()
                            : <img loading='lazy' src={pathToPhoto} alt={reviewInfo.author} />
                        }
                    </Link>
                </div>
                <div className='name_and_date'>
                    <h5>
                        <Link to='user'>
                            Review by {reviewInfo.author}
                        </Link>
                        {reviewInfo.author_details.rating && 
                            <span className='raiting'>
                                <FontAwesomeIcon icon={faStar}/>{reviewInfo.author_details.rating.toFixed(1)}
                            </span>
                        }
                    </h5>
                    <span>
                        written {reviewInfo.created_at.slice(0, 10)}
                    </span>
                </div>
            </div>
            <div className='content'>
                {(limitSymbols && shortContent)
                    ? <p>
                        {shortContent}
                        ...
                        <Link to='reviews?page=1'>full review</Link>
                    </p>
                    : <p>
                        {reviewInfo.content}
                    </p>
                }
            </div>
        </div>
    )
}

export default ReviewPreview