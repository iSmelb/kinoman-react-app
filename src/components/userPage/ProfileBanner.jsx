import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ProfileBanner({user}) { 
    const {displayName, photoURL, metadata} = user
    const dateOptions = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const UKDate = new Intl.DateTimeFormat("en-Uk", dateOptions)
    
    return (
        <div className='profileBanner_wrapper'>
            <div className='profileBanner conteiner'>
                <div className='avatar'>
                    {photoURL 
                        ? <img src={photoURL} alt='user avatar'/>
                        : <span>{displayName ? displayName : 'U'}</span>
                    }
                </div>
                <div className='name'>
                    <h2>
                        {displayName ? displayName : 'User'}
                    </h2>
                    <span>
                        Created at: {UKDate.format(metadata.createdAt)}
                    </span>
                </div>
                <div title='will be soon' className='edit'>Edit and settings <FontAwesomeIcon icon={faPen}/></div>
            </div>
        </div>
    )
}

export default ProfileBanner