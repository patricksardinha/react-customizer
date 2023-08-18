import React from 'react'
import Shirt from './Shirt'

const Item = ({ model }) => {
    switch (model) {
        case 'tshirt':
            return <Shirt />
        default:
            return null
    
}}

export default Item