import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchPanel from '../search/SearchPanel';
import CustomMenuItem from './CustomMenuItem';
import { movieLinks, peopleLinks, tvShowLinks } from './headerLinks';

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const headerRef = useRef(null)
    const [hideHeader, setHideHeader] = useState(false)
    const lastScroll = useRef(0)

    const swichBurger = () => {
        setBurgerMenu(prev => !prev)
        document.body.classList.toggle('stop-scrolling')
    }

    useEffect(() => {
        //скрываем и открываем хедер при скролле
        const defaultOffset = headerRef.current?.offsetHeight
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if(currentScrollY > lastScroll.current && !hideHeader && currentScrollY > defaultOffset) {
                setHideHeader(true)
            } else if(currentScrollY < lastScroll.current && hideHeader) {
                setHideHeader(false)
            }
            lastScroll.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[hideHeader])

    return (
        <header ref={headerRef} className={`header ${!hideHeader ? '' : 'hide'}`}>
            <div className='header_flex conteiner'>
                <div className='block_for_logo'>
                    <Link to='/'>
                        Kinoman
                    </Link>
                </div>
                <SearchPanel />
                <nav className={`header_nav ${burgerMenu ? 'active' : ''}`}>
                    <ul className='navList'>
                        <CustomMenuItem  name='Movies' dropItems={movieLinks} swichBurger={swichBurger}/>
                        <CustomMenuItem  name='TV Show' dropItems={tvShowLinks} swichBurger={swichBurger}/>
                        <CustomMenuItem  name='People' dropItems={peopleLinks} swichBurger={swichBurger}/>
                    </ul>
                </nav>
                <div className='hamburgerConteiner' onClick={swichBurger}>
                    <span className={`hamburger ${burgerMenu ? 'active' : ''}`} />
                </div>
            </div>
        </header>
    )
}

export default Header;