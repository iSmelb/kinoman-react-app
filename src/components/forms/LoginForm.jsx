import { Alert } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth } from '../..';
import Loader from '../UI/loader/Loader';
import MyButton from '../UI/Mybutton/MyButton';
import cl from './Form.module.scss';

function LoginForm() {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user])

    return (
        <>
            {loading && <Loader/>}
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input type='email' {...register('email', {
                        required: "This field is required",
                        pattern: null
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.email && <p>{errors?.email?.message}</p>}
                </div>
                <label>
                    Password:
                    <input {...register('password', {
                        required: "This field is required"
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.password && <p>{errors?.password?.message}</p>}
                </div>
                <MyButton type="submit">Login</MyButton>
            </form>
            {error && <Alert variant='filled' severity='error'>{error.message}</Alert>}
        </>
    )
}

export default LoginForm