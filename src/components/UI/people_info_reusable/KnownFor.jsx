import React from 'react'
import MoviePreview from '../PreviewReusable/MoviePreview';
import TvShowPreview from '../PreviewReusable/TvShowPreview';

function KnownFor({department, credits }) {
    const uniqueCreditsName  = [];
    let allCredits = []

    if(department === 'Directing') {
        allCredits = [...credits.crew]
    } else if (department === 'Acting') {
        allCredits = [...credits.cast]
    } else {
        allCredits = [...credits.cast, ...credits.crew]
    }
    
    allCredits = allCredits.filter(e => filterForUniqueName(e)).sort(sortByField('vote_count')).reverse()
    
    function filterForUniqueName (e) {
        
        if (e.media_type === 'movie') {
            if (!uniqueCreditsName.includes(e.original_title)) {
                uniqueCreditsName.push(e.original_title)
                return true
            }
        } else if (e.media_type === 'tv') {
            if (!uniqueCreditsName.includes(e.original_name)) {
                uniqueCreditsName.push(e.original_name)
                return true
            }
        }
        return false
    }
    function sortByField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    const getCardToRender = (mediaFile) => {
        if (mediaFile.media_type === 'movie') {
            return <MoviePreview key={mediaFile.id} movie={mediaFile} sizeImg='size220and330'/>
        }
        return <TvShowPreview key={mediaFile.id} tvObj={mediaFile} sizeImg='size220and330'/>
    }

    return (
        <section className='known_for'>
            <h3>Known For</h3>
            <div className='list_cards'>
                {allCredits.map((card, index) => index < 9 && getCardToRender(card))}
            </div>
        </section>
    )
}

export default KnownFor