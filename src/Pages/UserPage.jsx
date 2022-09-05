import { CircularProgress } from '@mui/material';
import { doc } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';
import { auth } from '..';
import MediaList from '../components/userPage/MediaList';
import ProfileBanner from '../components/userPage/ProfileBanner';
import { db } from '../firebase';
import { useUpdateTitle } from '../hooks/useUpdateTitle';

function UserPage() {
    const [user] = useAuthState(auth)
    const userId = user?.uid || 'fakeId' // фейк ай нужен для того чтобы страница не падала из-за "ref", при логауте
    const ref = doc(db, 'users', userId)
    const [value, loading, error] = useDocument(ref);
    const mediaList = value?.data() || null
    
    useUpdateTitle('My Profile')

    return (
        <div className='userPage'>
            {user && <ProfileBanner user={user} />}
            {loading && <CircularProgress sx={{display: 'block', margin: "20px auto 0"}}/>}
            {mediaList && <MediaList allMedia={mediaList} />}
        </div>
    )
}

export default UserPage