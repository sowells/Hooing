import React from 'react'
import Detail from './detail'

export  default ({match})=> {
    return (
        <div>
            <h2>Product : {match.params.category}, {match.params.product} </h2>
            <Detail/>
        </div>
    )
}