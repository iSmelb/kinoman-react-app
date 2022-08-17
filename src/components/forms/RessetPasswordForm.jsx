import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { emailPattern } from '../../variables/regExPaterns';
import MyButton from '../UI/Mybutton/MyButton';
import cl from './Form.module.scss';

function RessetPasswordForm({ resetFunc }) {
    const inputRef = useRef('')
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        resetFunc(data.email)
        inputRef.current.focus()
        reset()
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email:
                <input
                    type='email'
                    placeholder='What`s your email?'
                    {...register('email', {
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
            <MyButton type="submit">Continue</MyButton>
            <Link ref={inputRef} to='/login'>Login</Link>
        </form>
    )
}

export default RessetPasswordForm