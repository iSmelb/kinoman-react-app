import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '..';

function UserPage() {
    const [ user ] = useAuthState(auth)

    return (
        <div>UserPage {user?.email}</div>
    )
}

export default UserPage