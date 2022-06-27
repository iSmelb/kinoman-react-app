import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react/cjs/react.development'
import PersonPreview from '../PreviewReusable/PersonPreview'


function CastList({ cast }) {
  const personToShow = 9
  const castList = useRef(null)

  useEffect(() => {
    if(castList.current) {
      castList.current.scrollTo(0, 0)
    }
  }, [cast])

  return (
    <section className='cast'>
      {!!cast.length && 
        <Link to="#" className='showAll'>Full Cast and Crew<span /></Link>
      }
      <h3>Cast</h3>
      {!!cast.length
        ? <div ref={castList} className='castList'>
            {cast && cast.map((person, index) => (index <= personToShow) && <PersonPreview personInfo={person} key={person.id} />)}
          </div>
        : <span>We don't have any cast added to this file.</span>
      }
    </section>
  )
}

export default CastList