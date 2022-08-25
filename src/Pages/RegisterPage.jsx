import { Alert, CircularProgress } from '@mui/material'
import React from 'react'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '..'
import RegisterForm from '../components/forms/RegisterForm'
import RegisterComplete from '../components/registerPage/RegisterComplete'
import { useUpdateTitle } from '../hooks/useUpdateTitle'

function RegisterPage() {
    const [user] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        userCreate,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    useUpdateTitle('register')

    if (userCreate && user) {
        return <RegisterComplete userId={userCreate.user.uid} />
    }

    if (user && !loading && !userCreate) {
        return <Navigate to='/user' />
    }

    return (
        <div className='registerPage conteiner'>
            <div className='head'>
                <h1>Sign up for an account</h1>
                <p>Signing up for an account is free and easy. Fill out the form below to get started.</p>
            </div>
            <RegisterForm registerFunc={createUserWithEmailAndPassword} />
            {loading && <CircularProgress />}
            {error && <Alert variant='filled' severity='error'>{error.message}</Alert>}
        </div>
    )
}

export default RegisterPage