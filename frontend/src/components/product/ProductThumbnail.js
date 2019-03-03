import React from 'react';

const ProductThumbnail = (props) => {
    return (
        <img src={props.url} alt={props.alt}/>
    );
}

export default ProductThumbnail;