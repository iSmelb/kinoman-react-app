import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { changeActiveIndex, closeMenu, openMenu } from '../../redux/reducers/shortcarBarSlice'
import createDataForShortcar from './createDataForShortcar'
import CustomLink from './CustomLink'


function LinksPanel() {
    const { pathname, search } = useLocation()
    const type = pathname.search(/movies/) === -1 ? 'tv' : 'movies'
    const { id } = useParams()
    const barLinks = createDataForShortcar(type, id)
    const { activeLink, menuIsOpen, currentIndex } = useSelector(state => state.shortcarBar)
    const dispatch = useDispatch()

    const onMouseEnter = (index) => {
        // показывает саб меню при ховере, в соответствии с его индексом
        if(window.innerWidth > 900) {
            dispatch(openMenu())
            dispatch(changeActiveIndex(index))
        } 
    }
    const onMouseLeave = () => {
        // закрывает саб меню при ховере
        if(window.innerWidth > 900) {
            dispatch(closeMenu())
        } 
    }
    const openMenuInMobile = (event, index) => {
        // открывает саб меню при клике, нужно для моб устройств
        event.stopPropagation()
        dispatch(openMenu())
        dispatch(changeActiveIndex(index))
    }
    
    useEffect(()=> {
        // закрывает саб меню при клике в не его области
        const clickAnyToclose = (e) => {
            dispatch(closeMenu())
        }
        document.body.addEventListener('click', clickAnyToclose)
        return ()=> document.body.removeEventListener('click', clickAnyToclose)
    },[])

    return (
        <>
            <div className='shortcar_bar'>
                {barLinks.map((obj, index) => 
                    <div
                        className={`shortcar_bar_item ${activeLink === obj.name ? 'active' : ''}`}
                        key={obj.name}
                        onMouseEnter={() => onMouseEnter(index)}
                        onMouseLeave={onMouseLeave}
                    >
                        <h3 onClick={e => openMenuInMobile(e, index)}>
                            <span>{obj.name}</span>
                            <FontAwesomeIcon className='arrow' icon={faSortDown}/>
                        </h3>
                        <ul className={`${(menuIsOpen && currentIndex === index) ? 'show' : ''} ${index === barLinks.length -1 ? 'last-of-type' : ''}`}>
                            {obj.links.map(link =>
                                <CustomLink
                                    key={link.path}
                                    objName={obj.name}
                                    currentLink={link}
                                    currentPath={pathname + search}
                                />
                            )}
                        </ul>
                    </div>)
                }
            </div>
            <Outlet/>
        </>
    )
}

export default LinksPanel