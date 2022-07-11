import React from 'react'
import PersonPreview from '../components/UI/PreviewReusable/PersonPreview'
import filterDepartaments from '../utils/filterDepartaments'
import MiniMediaBanner from './UI/reusable/MiniMediaBanner'

function CastPageInfo({mediaFile, credits}) {
    const {cast, crew} = credits
    const departamentsList = filterDepartaments(crew)
    const arrListCrew = Object.entries(departamentsList).sort((a,b) => a[0] > b[0] ? 1 : -1)
    
    return (
        <>
            <MiniMediaBanner mediaFile={mediaFile}/>
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