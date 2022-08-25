import { faEye, faEyeSlash, faStar as faStarReg, faBookmark as faBookmarkReg } from '@fortawesome/free-regular-svg-icons'
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress } from '@mui/material'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { auth } from '../..'
import { db } from '../../firebase'

function InteractionWithMedia({ mediaFile }) {
    const [user] = useAuthState(auth)
    const userId = user?.uid || 'fakeId'
    const ref = doc(db, 'users', userId)
    const [value, loading] = useDocument(ref);
    const mediaList = value?.data() || null
    const isFavorite = mediaList?.favorite.find(item => item.id === mediaFile.id)
    const isWatchLater = mediaList?.watchLater.find(item => item.id === mediaFile.id)
    const isReviewed = mediaList?.reviewed.find(item => item.id === mediaFile.id)
    const activeColor = '#ffab00'

    const addFile = async (listName) => {
        await updateDoc(ref, {
            [listName]: arrayUnion(mediaFile)
        })
    }
    const removeFile = async (listName) => {
        await updateDoc(ref, {
            [listName]: arrayRemove(mediaFile)
        })
    }

    return (
        <div className='InteractionWithMedia'>
            {loading && <CircularProgress />}
            {mediaList &&
                <div className='buttons'>
                    <div
                        className='favorite'
                        onClick={() => isFavorite ? removeFile('favorite') : addFile('favorite')}
                        title="Add to favorit"
                    >
                        {isFavorite
                            ? <FontAwesomeIcon style={{ color: activeColor }} icon={faStar} />
                            : <FontAwesomeIcon icon={faStarReg} />
                        }
                    </div>
                    <div
                        className='reviewed'
                        onClick={() => isReviewed ? removeFile('reviewed') : addFile('reviewed')}
                        title="Add to reviewed"
                    >
                        {isReviewed
                            ? <FontAwesomeIcon style={{ color: activeColor }} icon={faEyeSlash} />
                            : <FontAwesomeIcon icon={faEye} />
                        }
                    </div>
                    <div
                        className='bookmark'
                        onClick={() => isWatchLater ? removeFile('watchLater') : addFile('watchLater')}
                        title="Add to watch later"
                    >
                        {isWatchLater
                            ? <FontAwesomeIcon style={{ color: activeColor }} icon={faBookmark} />
                            : <FontAwesomeIcon icon={faBookmarkReg} />
                        }
                    </div>
                </div>
            }
        </div>

    )
}

export default InteractionWithMedia