import React from 'react';
import Typography from '@material-ui/core/Typography';

const ProductInfo = (props) => {
    return (
        <div>
            <Typography variant="h5" component="h3">
                {props.name}
            </Typography>
            <Typography variant="h6">
                {props.price}원
            </Typography>                
        </div>
    );
}

export default ProductInfo;