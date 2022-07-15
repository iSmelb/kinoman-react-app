import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchPanel from '../search/SearchPanel'
import { selectAllPopular } from '../../redux/reducers/selectorsPoplularAll'
import getRandomInt from '../../utils/randomNumber';

function MainBanner() {
    const allPopularBackdrops = useSelector(selectAllPopular)
     const [bgPath, setBgpath] = useState(null)

    useEffect(() => {
        if (allPopularBackdrops) {
            const randomIndex = getRandomInt(allPopularBackdrops.length)
            setBgpath(allPopularBackdrops[randomIndex].backdrop_path)
        }

    }, [allPopularBackdrops])

    return (
        <div className='banner_bg_home_page' style={bgPath 
            && {
            backgroundImage: `linear-gradient( to right, rgba(6, 17, 26, 0.8) 0%, rgba(6, 17, 26, 0.8) 100%), url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${bgPath}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            } 
        }>
            <div className='banner_home_page conteiner'>
                <h1>
                    Welcome.
                    <br />
                    Immerse yourself in the world of movies and TV series, find something for you.
                </h1>
                <SearchPanel />
            </div>
        </div>
    )
}

export default MainBanner