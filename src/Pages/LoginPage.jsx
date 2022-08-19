import { Alert, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '..'
import LoginForm from '../components/forms/LoginForm'
import { useUpdateTitle } from '../hooks/useUpdateTitle'

function LoginPage() {
    const [user] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        _,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useUpdateTitle('login')
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    if(user) {
        return <Navigate to='/'/>
    }

    return (
        <div className='loginPage conteiner'>
            <div className='head'>
                <h1>Login to your account</h1>
                <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.</p>
            </div>
            <LoginForm loginFunc={signInWithEmailAndPassword}/>
            {loading && <CircularProgress/>}
            {error && <Alert variant='filled' severity='error'>{error.message}</Alert>}
        </div>
    )
}

export default LoginPage