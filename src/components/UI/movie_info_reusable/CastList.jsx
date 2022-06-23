import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react/cjs/react.development'
import PersonPreview from '../PreviewReusable/PersonPreview'

function CastList() {
  const objPersons = useSelector(state => state.movie.movie.credits)
  const cast = objPersons.cast
  const crew = objPersons.crew
  const personToShow = 9
  let castList = useRef(null)

  useEffect(() => {
    castList.current.scrollTo(0, 0)
  }, [objPersons])

  return (
    <section className='cast'>
      <Link to="#" className='showAll'>Смотреть весь состав<span /></Link>
      <h3>В главных ролях</h3>
      <div ref={castList} className='castList'>
        {cast
          ? cast.map((person, index) => (index <= personToShow) && <PersonPreview personInfo={person} key={person.id} />)
          : <span>К сожелению ничего не найдено</span>
        }
      </div>
    </section>
  )
}

export default CastList