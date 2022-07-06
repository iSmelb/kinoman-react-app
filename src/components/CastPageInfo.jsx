import React from 'react'
import {useSelector} from 'react-redux'
import filterDepartaments from '../utils/filterDepartaments'
import PersonPreview from '../components/UI/PreviewReusable/PersonPreview'
import { Link, useLocation } from 'react-router-dom'
import MoviePreview from './UI/PreviewReusable/MoviePreview'
import TvShowPreview from './UI/PreviewReusable/TvShowPreview'

function CastPageInfo({mediaFile, credits}) {
    const {cast, crew} = credits
    const uniqueListCrew = filterDepartaments(crew)
    const arrListCrew = Object.entries(uniqueListCrew).sort((a,b) => a[0] > b[0] ? 1 : -1)
    const {pathname} = useLocation()
    const isMovie = pathname.search(/movies/) === -1 ? false : true
    
    return (
        <>
            <div className='cast_crew_banner'>
                <div className='goBack conteiner'>
                    {isMovie 
                        ? <MoviePreview movie={mediaFile} sizeImg = 'size58and87'/>
                        : <TvShowPreview tvObj={mediaFile} sizeImg = 'size58and87'/>
                    }
                </div>
            </div>
            <div className='cast_crew_list conteiner'>
                <div className='cast_list'>
                    <h2>Cast <span>{cast.length}</span></h2>
                    {cast && cast.map(person => <PersonPreview key={person.id} personInfo={person} sizeImg='size66and66'/>)}
                </div>
                <div className='crew_list'>
                    {arrListCrew && arrListCrew.map(conteiner => 
                        <div key={conteiner[0]} className={`list_${conteiner[0]}`}>
                            <h2>{conteiner[0]} <span>{conteiner[1].length}</span></h2>
                            {conteiner[1] && conteiner[1].map(person => <PersonPreview key={person.id + Math.random()} personInfo={person} sizeImg='size66and66'/>)}
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default CastPageInfo