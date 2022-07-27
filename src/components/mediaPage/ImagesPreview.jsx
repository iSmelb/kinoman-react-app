import React from 'react'

const pathOriginal = 'https://www.themoviedb.org/t/p/original'
const pathImg500and282 = 'https://www.themoviedb.org/t/p/w500_and_h282_face'
const pathImg220and330 = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

/**
  * size img can be: size500and282, size220and330(default)
  */

function ImagesPreview({ image, sizeImg = 'size220and330' }) {
    const allSize = {
        size500and282: pathImg500and282,
        size220and330: pathImg220and330,
    }

    return (
        <div className='imagesPreview'>
            <div className='poster'>
                <a target='_blank' rel="noreferrer" href={pathOriginal + image.file_path}>
                    <img loading='lazy' src={allSize[sizeImg] + image.file_path} alt="poster" />
                </a>
            </div>
            <div className='info'>
                <a
                    href={pathOriginal + image.file_path}
                    target='_blank'
                    rel="noreferrer"
                >
                    Full size {`${image.width}x${image.height}`}
                </a>
                {image.iso_639_1 && <p>Language: {image.iso_639_1}</p>}
            </div>
        </div>
    )
}

export default ImagesPreview