import { faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../..';

function LoginPanel() {
    const [user] = useAuthState(auth)
    const [showOptions, setShowOptions] = useState(false)
    const logout = () => {
        signOut(auth);
    };
    const showMenu = (e) => {
        e.stopPropagation()
        setShowOptions(prev => !prev)
    }

    useEffect(()=> {
        // закрывает юзер меню
        const closeUserMenu = () => {
            setShowOptions(false)
        }
        document.body.addEventListener('click', closeUserMenu)
        window.addEventListener('scroll', closeUserMenu)

        return () => {
            document.body.removeEventListener('click', closeUserMenu)
            window.removeEventListener('scroll', closeUserMenu )
        }
    },[])

    return (
        <div className='header_loginPanel'>
            <div className='profile'>
                <div className='avatar' onClick={showMenu}>
                    {user
                        ? <FontAwesomeIcon icon={faUserCheck} />
                        : <FontAwesomeIcon icon={faUser} />
                    }
                </div>
                {user
                    ? <div className={`optionsList ${showOptions ? 'show' : ''}`}>
                        <Link to='/user'>View profile</Link>
                        <button className='logout' onClick={logout}>loguot</button>
                    </div>
                    : <div className={`authentication ${showOptions ? 'show' : ''}`}>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Sign up</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginPanel