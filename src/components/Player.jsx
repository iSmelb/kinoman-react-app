import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRef, useRef } from 'react/cjs/react.development'

function Player() {
    const key = useSelector(state => state.player.keyForMovie)
    const refPlayer = useRef(null)

    const closePlayer = () => {
        refPlayer.current.classList.remove('active')
        document.body.classList.remove('stop-scrolling')
    }

    return (
        <div ref={refPlayer} className="player" id='player' onClick={closePlayer}>
            <iframe
                id="ytplayer"
                type="text/html"
                src={`http://www.youtube.com/embed/${key}`}
                frameBorder="0"
                title='player' 
            />
        </div>
    )
}

export default Player