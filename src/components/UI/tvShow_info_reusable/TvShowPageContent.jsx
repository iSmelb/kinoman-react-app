import React from 'react'
import TvShowPreview from '../PreviewReusable/TvShowPreview'
import MyButon from '../Mybutton/MyButton'

/**
  * type can be: popular(default), airingToday, onTheAir, topRated
  */

function TvShowPageContent({ tvShowList, changePage, type = 'popular' }) {
    const titles = {
        popular: {
            class: 'popular_tvShow_page',
            title: 'Popular now'
        },
        airingToday: {
            class: 'airingToday_tvShow_page',
            title: 'Airing today'
        },
        onTheAir: {
            class: 'onTheAir_tvShow_page',
            title: 'TV shows on screens in the next 7 days'
        },
        topRated: {
            class: 'topRated_tvShow_page',
            title: 'Top rated'
        }
    }

    return (
        <div className={`${titles[type].class} conteiner`}>
            <h1>
                {titles[type].title}
            </h1>
            {tvShowList.map(tvObj => <TvShowPreview key={tvObj.id} tvObj={tvObj} sizeImg='size500and750'/>)}
            {tvShowList &&
                <div className='load_more_div'>
                <MyButon onClick={changePage}>Load more</MyButon>
            </div> 
            }
        </div>
    );
}

export default TvShowPageContent