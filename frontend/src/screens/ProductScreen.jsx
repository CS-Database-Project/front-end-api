import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'


const ProductScreen = ({match}) => {
    const product = products.find(p => p.product_id === match.params.id);
    console.log(product.title);
    return <div>{product.title}</div>
}

export default ProductScreen