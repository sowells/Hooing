import React from 'react';
import ImageGallery from 'react-image-gallery';

const ProductImage = (props) => {
    return (
        <ImageGallery items={props.images} showFullscreenButton={false} showPlayButton={false} showIndex={true} showThumbnails={false}/>
    );
}

export default ProductImage;