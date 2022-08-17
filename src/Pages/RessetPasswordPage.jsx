import { Alert, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '..'
import RessetPasswordForm from '../components/forms/RessetPasswordForm'

function RessetPasswordPage() {
    const [user] = useAuthState(auth)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    if(user) {
        return <Navigate to='/'/>
    }

    return (
        <div className='ressetPasswordPage conteiner'>
            <div className='head'>
                <h1>Reset password</h1>
                <p>Enter the email you used to sign up and we'll send you the steps required to reset your password.</p>
            </div>
            <RessetPasswordForm resetFunc={sendPasswordResetEmail}/>
            <div>After confirm check your email</div>
            {sending && <CircularProgress/>}
            {error && <Alert variant='filled' severity='error'>{error.message} Try again</Alert>}
        </div>
    )
}

export default RessetPasswordPage