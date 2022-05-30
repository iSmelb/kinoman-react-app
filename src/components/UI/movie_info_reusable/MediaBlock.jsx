import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react/cjs/react.development'

function MediaBlock({ images, video }) {
    const navUl = useRef(null)
    const arrTrailers = video.filter(video => video.type === 'Trailer')
    const [elem, setElem] = useState('')
    const [keys, setKey] = useState(arrTrailers[0].key)
    console.log(arrTrailers)

    const changeActive = (e) => {
        if (e.target.tagName !== 'LI') return;

        let arrLi = [...navUl.current.children]
        arrLi.forEach((elem) => elem.classList.remove('active'))
        document.querySelectorAll('div[data-name]').forEach((elem) => elem.classList.remove('active'))
        e.target.classList.add('active')
        let dataName = e.target.dataset.name
        document.querySelector(`div[data-name="${dataName}"]`).classList.add('active')
        setElem(document.querySelector('li.active').dataset.name)
    }

    useEffect(() => {
        document.querySelectorAll('[data-name]').forEach((elem) => elem.classList.remove('active'))
        document.querySelectorAll('[data-name="posters"').forEach((elem) => elem.classList.add('active'))
        setElem(document.querySelector('li.active').dataset.name)
    }, [images])

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
                <Link className='showAll' to={elem}>Смотреть все</Link>
            </div>
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
        </section>
    )
}

export default MediaBlock