import React, { useState, useLayoutEffect, useRef,} from 'react'

function Biography({ personObj }) {
    const arrParagraphs = personObj?.biography.split(/(?:\r?\n){2,}/)
    const blockText = useRef(null)
    const maxHeightPx = 210
    const [maxHeigth, setMaxHeigth] = useState(true)

    useLayoutEffect(() => {
        if(blockText.current.offsetHeight < maxHeightPx) {
            setMaxHeigth(false)
        }
    },[])

    return (
        <section className='biography'>
            <h1>{personObj.name}</h1>
            <h3>Biography</h3>
            <div ref={blockText} className={`text ${maxHeigth ? 'maxHeight' : ''}`}>
                {arrParagraphs && arrParagraphs.map((text, index) => <p key={index}>{text}</p>)}
                <div className={`readMore ${maxHeigth ? '' : 'hide'}`}>
                    <span onClick={() => setMaxHeigth(!maxHeigth)} className='readMoreLink'>
                        Read more
                    </span>
                </div>
                {!arrParagraphs[0] && <p>Unfortunately, we have no information about this person</p>}
            </div>
        </section>
    )
}

export default Biography