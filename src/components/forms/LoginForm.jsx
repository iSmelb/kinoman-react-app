import React from 'react';
import { Alert } from '@mui/material';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../..';
import { emailPattern } from '../../variables/regExPaterns';
import Loader from '../UI/loader/Loader';
import MyButton from '../UI/Mybutton/MyButton';
import cl from './Form.module.scss';

function LoginForm() {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
                        pattern: {
                            value: emailPattern,
                            message: 'Invalid email adress'
                        }
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.email && <p>{errors?.email?.message}</p>}
                </div>
                <label>
                    Password:
                    <input type='password' {...register('password', {
                        required: "This field is required"
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.password && <p>{errors?.password?.message}</p>}
                </div>
                <MyButton type="submit">Login</MyButton>
                <Link to='/resset-password'>Reset password</Link>
            </form>
            {error && <Alert variant='filled' severity='error'>{error.message}</Alert>}
        </>
    )
}

export default LoginForm