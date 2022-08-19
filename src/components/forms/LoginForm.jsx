import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { emailPattern } from '../../variables/regExPaterns';
import MyButton from '../UI/Mybutton/MyButton';
import cl from './Form.module.scss';

function LoginForm({ loginFunc }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        loginFunc(data.email, data.password)
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
    )
}

export default LoginForm