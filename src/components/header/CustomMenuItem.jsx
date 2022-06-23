import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomMenuItem({ name, dropItems, swichBurger }) {
    const [dropdown, setDropdown] = useState(false)

    const onMouseEnter = () => {
        window.innerWidth > 900 && setDropdown(true)
    }
    const onMouseLeave = () => {
        window.innerWidth > 900 && setDropdown(false)
    }
    const checkAndSwitch = () => {
        window.innerWidth < 901 && swichBurger()
    }

    return (
        <li className={`menuItem ${dropdown ? 'dropActive' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='cardHeader' onClick={()=> setDropdown(prev => !prev)}>
                {name}
            </div>
            <ul className={`links${name}`}>
                {dropItems.map(link =>
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            onClick={checkAndSwitch}
                        >
                            {link.name}
                        </Link>
                    </li>)}
            </ul>
        </li>
    )
}


export default CustomMenuItem