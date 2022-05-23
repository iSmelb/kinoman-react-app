import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react/cjs/react.development'
import PersonPreview from '../PreviewReusable/PersonPreview'

function CastList({objPersons}) {
    const cast = objPersons.cast
    const crew = objPersons.crew
    const personToShow = 9
    let castList = useRef(null)
    
    useEffect(()=> {
        castList.current.scrollTo(0,0)
    }, [objPersons]) //можно сделать через локал стор, чтобы избавиться от еффекта в этом компоненте

  return (
    <div className='cast conteiner'>
        <h3>В главных ролях</h3>
        <Link to="#">Смотреть весь состав</Link>
        <div ref={castList} className='castList'>
            {cast 
            ? cast.map( (person, index) => (index <= personToShow) && <PersonPreview personInfo={person} key={person.id}/> )
            : <span>К сожелению ничего не найдено</span>
        }
        </div>
    </div>
  )
}

export default CastList