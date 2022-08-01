import React from 'react';
import ReviewsPageConteiner from './ReviewsConteiner';
import MiniMediaBanner from '../UI/reusable/MiniMediaBanner';

function ReviewsPageInfo({ mediaFile, reviews }) {
    
    return (
        <div className='reviewsPageInfo'>
            <MiniMediaBanner mediaFile={mediaFile} />
            <ReviewsPageConteiner reviews={reviews}/>
        </div>
    )
}

export default ReviewsPageInfo