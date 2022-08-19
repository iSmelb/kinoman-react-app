import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '..';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ProfileBanner from '../components/userPage/ProfileBanner';

function UserPage() {
    const [user] = useAuthState(auth)
    const userId = user?.uid || 'fakeId' // фейк ай нужен для того чтобы страница не падала из-за "ref", при логауте
    const ref = doc(db, 'users', userId)
    const [value, loading, error] = useDocument(
        ref,
    );



    console.log()
    // },[value])

    return (
        <>
            <div>UserPage {user?.email}</div>
            <ProfileBanner user={user}/>
            {/* <button onClick={createUser}>add user</button> */}
        </>
    )
}

export default UserPage