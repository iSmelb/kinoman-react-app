import React from 'react';
import { useForm } from 'react-hook-form';
import { emailPattern } from '../../variables/regExPaterns';
import MyButton from '../UI/Mybutton/MyButton';
import cl from './Form.module.scss';

function RegisterForm({ registerFunc }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset
    } = useForm({ mode: "onBlur" })
    const password = watch("password")

    const onSubmit = (data) => {
        registerFunc(data.email, data.password)
        reset()
    }

    return (
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
    )
}

export default RegisterForm