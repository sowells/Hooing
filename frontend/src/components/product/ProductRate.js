import React from 'react';

const ProductRate = (props) => {
    let comment;

    if(props.rate > 4.5) comment = '최고 좋음';
    else if(props.rate > 4) comment = '아주 좋음';
    else if(props.rate > 3) comment = '좋음';


    return (
        <div>
            {comment + ' ' + props.rate + ' / 5'}
        </div>  
    );
}

const printRate = (rate) => {
    let result = '';
    for(let i = 0; i < rate; i++) {
        result += '★';
    }
    return result;
}

export default ProductRate;
export { printRate };