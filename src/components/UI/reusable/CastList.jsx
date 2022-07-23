import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react/cjs/react.development'
import PersonPreview from '../PreviewReusable/PersonPreview'

function CastList({ cast }) {
  const personToShow = 9

  return (
    <section className='cast'>
      {!!cast.length && 
        <Link to="cast" className='showAll'>Full Cast and Crew<span /></Link>
      }
      <h3>Cast</h3>
      {!!cast.length
        ? <div className='castList'>
            {cast && cast.map((person, index) => (index <= personToShow) && <PersonPreview personInfo={person} key={person.id} />)}
          </div>
        : <span>We don't have any cast added to this file.</span>
      }
    </section>
  )
}

export default CastList