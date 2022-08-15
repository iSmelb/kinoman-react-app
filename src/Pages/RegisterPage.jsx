import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '..'
import RegisterForm from '../components/forms/RegisterForm'
import { useUpdateTitle } from '../hooks/useUpdateTitle'

function RegisterPage() {
    const [user] = useAuthState(auth)
    useUpdateTitle('register')

    if(user) {
        return <Navigate to='/'/>
    }
    
    return (
        <div className='registerPage conteiner'>
            <div className='head'>
                <h1>Sign up for an account</h1>
                <p>Signing up for an account is free and easy. Fill out the form below to get started.</p>
            </div>
            <RegisterForm/>
        </div>
    )
}

export default RegisterPage