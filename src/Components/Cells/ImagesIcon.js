import React from 'react'

const ImagesIcon = ({ className = '', src: image, size = 30, ...restProps }) => {
    return(
        <img
        className={className}
        alt={'icon'}
        src={image}
        style={{ width: 'auto', height: size, objectFit: 'contain' }}
        {...restProps}
    />
    );
}

export default ImagesIcon;