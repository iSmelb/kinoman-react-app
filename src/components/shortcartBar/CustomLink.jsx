import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeActiveLink } from '../../redux/reducers/shortcarBarSlice'

function CustomLink ({objName, currentLink, currentPath}) {
    const dispatch = useDispatch()

    useEffect(()=> {
        if(currentLink.path === currentPath) {
            dispatch(changeActiveLink(objName))
        }
    },[currentPath])
  
    return (
        <li onClick={() => dispatch(changeActiveLink(objName))}>
            <Link to={currentLink.path}>{currentLink.name}</Link>
        </li>
    )
}
export default React.memo(CustomLink)