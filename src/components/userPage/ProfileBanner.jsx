import React from 'react'

function ProfileBanner({user}) { 
    const {displayName, photoURL, metadata, email} = user
    const dateOptions = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    const UKDate = new Intl.DateTimeFormat("en-Uk", dateOptions)

    console.log(user)
    
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
                        {displayName ? displayName : email}
                    </h2>
                    <span>
                        Created at: {UKDate.format(metadata.createdAt)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner