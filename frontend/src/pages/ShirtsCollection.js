import React from 'react'
import ItemGrid from '../components/ItemGrid'
import { sampleGridItems, samplePaperItems } from './../testData/ItemGrid';

export default () => 
<div>
    <ItemGrid items={[...samplePaperItems, ...sampleGridItems]}/>
</div> 

