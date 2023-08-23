import React from 'react'
import Shirt from './Shirt'
import Shoes from './Shoes'

const Item = ({ model }) => {
    switch (model) {
        case 'tshirt':
            return <Shirt />
        case 'shoes':
            return <Shoes />
        default:
            return null
    
}}

export default Item