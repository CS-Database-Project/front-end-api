import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({ product }) {
    return (
        <>
            <Card className = 'my-3 p-3 rounded'>
                <Link to = {`/products/${product._id}`}>
                    <Card.Img src = {product.image} variant = 'top'/>
                </Link>
                <Card.Body>
                    <Link to = {`/products/${product._id}`}>
                        <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                    </Link>
                    <Card.Text as = 'div'><Rating rating = {product.rating} message = {`${product.rating} From ${product.numReviews} Reviews`}></Rating></Card.Text>
                    <Card.Text as = 'div'><h3>${product.price}</h3></Card.Text>
                </Card.Body>
            </Card>  
        </>
    );
}

export default Product;