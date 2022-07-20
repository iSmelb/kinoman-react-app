import React from 'react'
import ImagesPreview from './ImagesPreview'

function ImagesList({data}) {
    const size = data.title === 'posters' ? 'size220and330' : 'size500and282'

    return (
        <div className={`images_list ${data.title}`}>
            {data.elementsToRend.map(image => <ImagesPreview key={image.file_path} image={image} sizeImg={size}/>)}
            {!data?.elementsToRend.length && <p>Images not found</p>}
        </div>
    )
}

export default ImagesList