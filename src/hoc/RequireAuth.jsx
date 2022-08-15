import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '..'

function RequireAuth({children}) {
    const location = useLocation()
    const [user] = useAuthState(auth)

    if(!user){
        return <Navigate to='/' state={{form: location}}/>
    }
    return children
}

export default RequireAuth