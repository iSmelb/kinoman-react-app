import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../..';
import cl from './Form.module.scss'
import MyButton from '../UI/Mybutton/MyButton'
import { Alert } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../UI/loader/Loader';
import { emailPattern } from '../../variables/regExPaterns';

function RegisterForm() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset
    } = useForm({ mode: "onBlur" })
    const password = watch("password")
    const navigate = useNavigate()

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
        reset()
    }

    useEffect(() => {
        if(user) {
            setTimeout(() => navigate('/'), 700)
        }
    },[user])

    // загрузка, ошибка и конфирм находятся в этой форме, так как хук "useCreateUserWithEmailAndPassword"-
    // созданынй в разных компонентах не синхронизируется между собой можно было бы логику вынести в компонент страницы регистрации
    // и сюда перекинуть функцию "createUserWithEmailAndPassword", но я не знаю как правильнее и лучше
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
                    Password (6 characters minimum):
                    <input type='password' {...register('password', {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Min length is 6 characters"
                        },
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.password && <p>{errors?.password?.message}</p>}
                </div>
                <label>
                    Password Confirm:
                    <input type='password' {...register('confirmPassword', {
                        required: "This field is required",
                        validate: value => value === password || `The passwords don't match`
                    })} />
                </label>
                <div className={cl.error}>
                    {errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
                </div>
                <MyButton type="submit">Sign up</MyButton>
            </form>
            {user && <Alert
                variant='filled'
                sx={{ backgroundColor: '#52d15d'}}
                severity='success'
            >
                Registration complete
            </Alert>}
            {error && <Alert variant='filled' severity='error'>{error.message}</Alert>}
        </>

    )
}

export default RegisterForm