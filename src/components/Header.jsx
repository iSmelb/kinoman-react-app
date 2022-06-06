import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/search.svg';
import SearchPanel from './UI/search/SearchPanel';

function Header() {
    
    return (
        <header className='header'>
            <div className='header_flex conteiner'>
                <div className='block_for_logo'>
                    <Link to='/'>
                        {/* <img className='logo' src={logo} alt="logo" /> */}
                        Kinoman
                    </Link>
                </div>
                <SearchPanel/>
                <nav className="header_nav">
                    <ul>
                        <li><Link to="/Movies">Фильмы</Link></li>
                        <li><Link to="/Serials">Сериалы</Link></li>
                        <li><Link to="Selections">Подборки</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;