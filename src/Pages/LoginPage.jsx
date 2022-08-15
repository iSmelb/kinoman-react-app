import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '..'
import LoginForm from '../components/forms/LoginForm'
import { useUpdateTitle } from '../hooks/useUpdateTitle'

function LoginPage() {
    const [user] = useAuthState(auth)

    useUpdateTitle('login')

    if(user) {
        return <Navigate to='/'/>
    }

    return (
        <div className='loginPage conteiner'>
            <div className='head'>
                <h1>Login to your account</h1>
                <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.</p>
            </div>
            <LoginForm/>
        </div>
    )
}

export default LoginPage