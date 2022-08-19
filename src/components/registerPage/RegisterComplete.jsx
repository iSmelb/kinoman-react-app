import { Alert, CircularProgress } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

function RegisterComplete({ userId }) {
    //ссылка на конкретный документ в бд который нужно создать
    const ref = doc(db, 'users', userId)
    
    // доступ в выбраному документу
    const [value, loading] = useDocument(ref);

    const createUserDb = async (ref) => {
        try {
            await setDoc(ref, { favorit: [userId] }, { merge: true })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (value && !value?._document) {
            createUserDb(ref)
        }
    }, [value])

    //компонент после успешной регистраии создает базу данных в фаер стор со своим ай ди
    //возможно нужно выводить алерт только после того как создалась бд, так как если пользователь выйдет до создания бд, всё сломается

    return (
        <div className='registerPage conteiner'>
            <div className='head'>
                <Alert
                    variant='filled'
                    sx={{ backgroundColor: '#52d15d' }}
                    severity='success'
                >
                    Registration complete
                </Alert>
            </div>
            {loading
                ? <CircularProgress/>
                : <div className='links'>
                    <Link to='/'>Go homepage</Link>
                    <Link to='/user'>Go profile</Link>
                </div>
            }
        </div>
    )
}

export default RegisterComplete