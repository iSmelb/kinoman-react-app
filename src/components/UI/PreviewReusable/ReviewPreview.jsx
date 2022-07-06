import React from 'react'
import { Link } from 'react-router-dom'
import cutText from '../../../utils/cutText'
import pathToImg from '../../../utils/pathToImg'

function ReviewPreview({ reviewInfo }) {
    const maxSymbols = 100
    let shortContent
    let pathToPhoto = pathToImg(reviewInfo.author_details.avatar_path)

    if (reviewInfo.content.length > maxSymbols) {
        shortContent = cutText(reviewInfo.content, maxSymbols)
    }


    return (
        <div className='reviewPreview'>
            <div className='info'>
                <div className='photo'>
                    <Link to='review'>
                        {!reviewInfo.author_details.avatar_path
                            ? reviewInfo.author.slice(0, 1).toUpperCase()
                            : <img src={pathToPhoto} alt={'sdc'} />
                        }
                    </Link>
                </div>
                <div className='name_and_date'>
                    <h5>
                        <Link to='#'>
                            Review by {reviewInfo.author}
                        </Link>
                    </h5>
                    <span>
                        written {reviewInfo.created_at.slice(0, 10)}
                    </span>
                </div>
            </div>
            <div className='content'>
                {shortContent
                    ? <p>
                        {shortContent}
                        ...
                        <Link to={'#'}>full review</Link>
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