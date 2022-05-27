import React from 'react';
import MyButon from './UI/Mybutton/MyButton';
import MoviePreview from './UI/PreviewReusable/MoviePreview';

function MainHomePage({ movies, page, changePage }) {

    return (
        <div className='banner_bg conteiner'>
            <h1>Популярно Сейчас</h1>
            {movies.map(movie => <MoviePreview key={movie.id} movie={movie} />)}
            <div className='load_more_div'>
                <MyButon onClick={() => changePage(page)}>Загрузить ещё</MyButon>
            </div>
        </div>
    );
}

export default MainHomePage;
