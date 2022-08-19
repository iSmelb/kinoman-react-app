import React from 'react'

function ProfileBanner({user}) {
    const {displayName, photoURL} = user

    console.log(displayName, photoURL)

    return (
        <div>ProfileBanner</div>
    )
}

export default ProfileBanner