import ReviewPreview from '../PreviewReusable/ReviewPreview'

function ReviewsConteiner({reviews}) {
  const totalCount = reviews.total_results
  const arrReviews = reviews.results

  return (
    <section className='reviewsCOnteiner'>
      <h3>Reviews {`(${totalCount})`}</h3>
      {arrReviews.map((review, index) => (index < 3) && <ReviewPreview reviewInfo={review} key={review.id} />)}
    </section>
  )
}

export default ReviewsConteiner