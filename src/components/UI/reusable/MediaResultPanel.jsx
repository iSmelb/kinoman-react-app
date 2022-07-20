import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LANGUAGES_LIST from '../../../variables/languagesData'

function MediaResultPanel({ data }) {
    const [switchPanel, setSwithPanel] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const searchString = data.type === 'images' ? searchParams.get('language') : searchParams.get('type')

    const showResPanel = () => {
        setSwithPanel(!switchPanel)
        document.body.classList.toggle('stop-scrolling')
    }

    const changeActive = (item) => {
        if (data.type === 'images') {
            setSearchParams({ language: item })
        } else {
            setSearchParams({ type: item })
        }
        window.scrollTo(0, 0)
    }

    // <li key={item[0]} onClick={() => changeActive(item[0])}>
    //                         <div className={`link ${item[0] === searchString ? 'active' : ''}${!searchString && index === 0 ? 'active' : ''}`}>
    //                             {data.type === 'images' 
    //                                 ? <span className='name'>{LANGUAGES_LIST[item[0]]?.name}</span>
    //                                 : <span className='name'>{item[0]}</span>
    //                             }
    //                             <span className='count'>
    //                                 {item[1].length}
    //                             </span>
    //                         </div>
    //                     </li>)

    return (
        <div className={`wrapperResultPanel ${switchPanel ? 'show' : ''}`}>
            <div className='resultPanel'>
                <h1>{data.title} ({data.totalCount})</h1>
                <ul className='resultList'>
                    {data?.results.map((item, index) =>
                        <li
                            key={item[0]}
                            onClick={() => changeActive(item[0])}
                            className={`link ${item[0] === searchString ? 'active' : ''}${!searchString && index === 0 ? 'active' : ''}`}
                        >
                            {data.type === 'images'
                                ? <span className='name'>{LANGUAGES_LIST[item[0]]?.name}</span>
                                : <span className='name'>{item[0]}</span>
                            }
                            <span className='count'>
                                {item[1].length}
                            </span>
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

export default MediaResultPanel