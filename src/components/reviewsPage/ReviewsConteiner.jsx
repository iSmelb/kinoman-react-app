import { Pagination } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ReviewPreview from '../UI/PreviewReusable/ReviewPreview';

function ReviewsPageConteiner({reviews}) {
    const [_, setSearchParams] = useSearchParams();

    const pages = {
        currentPage: reviews?.page,
        totalPages: reviews?.total_pages
    }

    const updatePage = (page) => {
        setSearchParams({ page: page })
    }

    return (
        <div className='reviews_result conteiner'>
            <div className='writeReviews'>
                <span>A feature to write a review will be added soo</span>
            </div>
            <div className='list_reviews'>
                {reviews?.results.map(review => <ReviewPreview key={review.id} limitSymbols={false} reviewInfo={review} />)}
            </div>
            {pages.totalPages > 1 &&
                <Pagination
                    count={pages.totalPages}
                    page={pages.currentPage || 1}
                    onChange={(_, num) => updatePage(num)}
                />
            }
        </div>
    )
}

export default ReviewsPageConteiner