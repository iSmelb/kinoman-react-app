import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react/cjs/react.development'

function MediaBlock({ images, video }) {
    const params = useParams()
    let movieId = params.id
    const navUl = useRef(null)
    const contentBlock = useRef(null)
    const arrTrailers = video.filter(video => video.type === 'Trailer')
    const [linkToAllContent, setLinkToAllContent] = useState('')

    const changeActive = (e) => {
        if (e.target.tagName !== 'LI') return;

        let arrLi = [...navUl.current.children]
        arrLi.forEach( domElem => domElem.classList.remove('active'))
        e.target.classList.add('active')
        let dataName = e.target.dataset.name
        let arrDiv = [...contentBlock.current.children]
        arrDiv.forEach( domElem => {
            domElem.classList.remove('active')
            if(dataName === domElem.classList[0]) {
                domElem.classList.add('active')
            }
        })
        setLinkToAllContent(e.target.dataset.name)
    }

    useEffect(() => {
        let arrLi = [...navUl.current.children]
        arrLi.forEach( domElem => domElem.classList.remove('active'))
        arrLi[0].classList.add('active')
        let arrDiv = [...contentBlock.current.children]
        arrDiv.forEach( domElem => domElem.classList.remove('active'))
        arrDiv[0].classList.add('active')
        setLinkToAllContent(navUl.current.children[0].dataset.name)
        console.log(arrTrailers)
    }, [movieId])

    return (
        <section className='media'>
            <div className='media_nav'>
                <h3>Медиа</h3>
                <ul
                    ref={navUl}
                    className='media_nav_list'
                    onClick={e => changeActive(e)}
                >
                    <li data-name='posters' className='active'>Постеры {images.posters.length}</li>
                    <li data-name='backdrops'>Задники {images.backdrops.length}</li>
                    <li data-name='video'>Видео {arrTrailers.length}</li>
                </ul>
                <Link className='showAll' to={linkToAllContent}>Смотреть все</Link>
            </div>
            <div ref={contentBlock} className='content'>
                <div data-name='posters' className='posters active'>
                    {images.posters.map((poster, index) => (index < 8) &&
                        <div key={index + poster.file_path}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster.file_path}`} alt="poster" />
                        </div>
                    )}
                </div>
                <div data-name='backdrops' className='backdrops'>
                    {images.posters.map((backdrop, index) => (index < 3) &&
                        <div key={index + backdrop.file_path}>
                            <img src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${backdrop.file_path}`} alt="backdrop" />
                        </div>
                    )}
                </div>
                <div data-name='video' className='video'>
                    {arrTrailers.map(video =>
                        <div key={video.key} style={{ background: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')` }}>

                        </div>)}
                </div>
            </div>
        </section>
    )
}

export default MediaBlock