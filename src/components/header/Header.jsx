import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchPanel from '../search/SearchPanel';
import CustomMenuItem from './CustomMenuItem';
import { movieLinks, peopleLinks, tvShowLinks } from './headerLinks';

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const swichBurger = () => {
        setBurgerMenu(prev => !prev)
        document.body.classList.toggle('stop-scrolling')
    }

    //Нужно решить проблему с кей, когда заполню все ссылки 

    return (
        <header className='header'>
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