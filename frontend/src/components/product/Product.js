import React from 'react'
import Detail from './ProductDetail'

export  default (props)=> {
    const {match} = props
    return (
        <div>
            <h2>Product : {match.params.category}, {match.params.product} </h2>
            <Detail id={match.params.product}/>
        </div>
    )
}