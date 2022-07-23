import { useDispatch, useSelector } from 'react-redux'
import { togglePlayer } from '../redux/reducers/playerSlice'

function Player() {
    const key = useSelector(state => state.player.keyForMovie)
    const state = useSelector(state => state.player.active)
    const dispatch = useDispatch()

    const closePlayer = () => {
        dispatch(togglePlayer())
        document.body.classList.remove('stop-scrolling')
    }

    return (
        <div className={`player ${state ? 'active' : ''}`} id='player' onClick={closePlayer}>
            <iframe
                id="ytplayer"
                type="text/html"
                src={`https://www.youtube.com/embed/${key}`}
                frameBorder="0"
                title='player' 
            />
        </div>
    )
}

export default Player