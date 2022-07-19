import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LANGUAGES_LIST from '../../../variables/languagesData'

function LanguageResultPanel({ data }) {
    const [switchPanel, setSwithPanel] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const searchLang = searchParams.get('language')

    const showResPanel = () => {
        setSwithPanel(!switchPanel)
        document.body.classList.toggle('stop-scrolling')
    }

    const changeLang = (code) => {
        setSearchParams({ language: code })
        window.scrollTo(0, 0)
    }

    return (
        <div className={`wrapperResultPanel ${switchPanel ? 'show' : ''}`}>
            <div className='resultPanel'>
                <h1>{data.title} ({data.totalCount})</h1>
                <ul className='resultList'>
                    {data?.results.map(lang =>
                        <li key={lang[0]} onClick={() => changeLang(lang[0])}>
                            <div className={`link ${lang[0] === searchLang ? 'active' : ''}`}>
                                <span className='name'>{LANGUAGES_LIST[lang[0]]?.name}</span>
                                <span className='count'>
                                    {lang[1].length}
                                </span>
                            </div>
                        </li>)
                    }
                </ul>
                <button className='toggleHidePanel' onClick={showResPanel}>
                    <span className='arrow' />
                </button>
            </div>
        </div>
    )
}

export default LanguageResultPanel