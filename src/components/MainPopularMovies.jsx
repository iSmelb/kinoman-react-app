import React from 'react';
import MyButon from './UI/Mybutton/MyButton';
import MoviePreview from './UI/PreviewReusable/MoviePreview';

function MainPopularMovies({ movies, page, changePage }) {

    return (
        <div className='banner_bg_popular_movies conteiner'>
            <h1>Популярно Сейчас</h1>
            {movies.map(movie => <MoviePreview key={movie.id} movie={movie} sizeImg={'size500and750'} />)}
            <div className='load_more_div'>
                <MyButon onClick={() => changePage(page)}>Загрузить ещё</MyButon>
            </div>
        </div>
    );
}

export default MainPopularMovies;
