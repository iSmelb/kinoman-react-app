import React from 'react'
import ReviewPreview from '../PreviewReusable/ReviewPreview'

function ReviewsConteiner({reviews}) {
    const arrReviews = reviews.results

  return (
    <div className='reviewsCOnteiner'>
        <h3>Обсуждения {`(${reviews.total_results})`}</h3>
        {arrReviews.map((review, index) => (index < 3) && <ReviewPreview reviewInfo={review} key={review.id}/>)}
    </div>
  )
}

export default ReviewsConteiner