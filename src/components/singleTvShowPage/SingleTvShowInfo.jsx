import React from 'react'
import { useSelector } from 'react-redux'
import CastList from '../UI/reusable/CastList'
import TvShowInfo from '../UI/tvShow_info_reusable/TvShowInfo'
import ReviewsConteiner from '../UI/reusable/ReviewsConteiner'
import MediaBlock from '../UI/reusable/MediaBlock'
import RecommendationsBlock from '../UI/reusable/RecommendationsBlock'
import SeasonSection from '../UI/tvShow_info_reusable/SeasonSection'

function SingleTvShowInfo() {
  const cast = useSelector(state => state.singleTvShow.singleTvShow?.aggregate_credits.cast)
  const reviews = useSelector(state => state.singleTvShow.singleTvShow?.reviews)
  const images = useSelector(state => state.singleTvShow.singleTvShow?.images)
  const videos = useSelector(state => state.singleTvShow.singleTvShow?.videos.results)
  const recommendations = useSelector(state => state.singleTvShow.singleTvShow?.recommendations.results)
  const tvShow = useSelector(state => state.singleTvShow.singleTvShow)

  return (
    <div className='singleTvShowInfo'>
      <TvShowInfo />
      <div className='gridConteiner conteiner'>
        <CastList cast={cast} />
        <SeasonSection tvShowObj={tvShow}/>
        <ReviewsConteiner reviews={reviews}/>
        <MediaBlock images={images} videos={videos}/>
        <RecommendationsBlock recommendations={recommendations} type='tv'/>
      </div>
    </div>
  )
}

export default SingleTvShowInfo