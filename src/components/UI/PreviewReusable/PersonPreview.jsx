import React from 'react'
import { Link } from 'react-router-dom'

function PersonPreview({personInfo}) {

  return (
    <div className='personPreview'>
        <div className='photo'>
            <Link to='#'>
                <img src={'https://www.themoviedb.org/t/p/w138_and_h175_face/' + personInfo.profile_path} alt={personInfo.name}/>
            </Link>
        </div>
        <div className='name'>
            <h5>
                <Link to="#">
                    {personInfo.name}
                </Link>
            </h5>
            <span>
                {personInfo.character}
            </span>
        </div>

    </div>
  )
}

export default PersonPreview