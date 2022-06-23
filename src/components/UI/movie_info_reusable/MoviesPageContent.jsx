import React from 'react';
import MyButon from '../Mybutton/MyButton';
import MoviePreview from '../PreviewReusable/MoviePreview';

/**
  * type can be: popular(default), playingNow, upComing, topRated
  */

function MoviesPageContent({ movies, changePage, type = 'popular' }) {
    const titles = {
        popular: {
            class: 'popular_movies_page',
            title: 'Popular now'
        },
        playingNow: {
            class: 'playingNow_movies_page',
            title: 'Playing now'
        },
        upComing: {
            class: 'upComing_movies_page',
            title: 'Upcoming'
        },
        topRated: {
            class: 'topRated_movies_page',
            title: 'Top rated'
        }
    }

    return (
        <div className={`${titles[type].class} conteiner`}>
            <h1>
                {titles[type].title}
            </h1>
            {movies.map(movie => <MoviePreview key={movie.id} movie={movie} sizeImg={'size500and750'} />)}
            {!!movies.length &&
                <div className='load_more_div'>
                <MyButon onClick={changePage}>Load more</MyButon>
            </div> 
            }
        </div>
    );
}

export default MoviesPageContent;
