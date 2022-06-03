import React from 'react'
import { useSelector } from 'react-redux'
import ReviewPreview from '../PreviewReusable/ReviewPreview'

function ReviewsConteiner() {
  const reviews = useSelector(state => state.movie.movie.reviews)
  const arrReviews = reviews.results

  return (
    <section className='reviewsCOnteiner'>
      <h3>Обсуждения {`(${reviews.total_results})`}</h3>
      {arrReviews.map((review, index) => (index < 3) && <ReviewPreview reviewInfo={review} key={review.id} />)}
    </section>
  )
}

export default ReviewsConteiner