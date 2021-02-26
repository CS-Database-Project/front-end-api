import React, {useState, useEffect} from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function SearchProduct({ product }) {

    const [rating, setRating ] = useState(0);

    useEffect(() => {
        setRating(calculateRating(product.reviews));
    }, [product.reviews]);

    return (
        <>
            <Card className = 'my-1 p-3 rounded' style={{width:'800px', marginLeft:'165px'}}>
                <Col style={{display:'flex'}}>
                    <Link to = {`/products/${product.productId}`}>
                        <Card.Img src={`/images/${product.productId}.jpg`}  variant = 'top' style={{height:'10rem', width:'10rem'}}/>
                    </Link>

                    <Card.Body style={{marginLeft:'20px'}}>
                        <Link to = {`/products/${product.productId}`}>
                            <Card.Title as='div' style={{fontSize:'20px'}}><strong>{product.title}</strong></Card.Title>
                        </Link>
                        <Card.Text as = 'div'><Rating rating = {rating} message = {rating === 0 ? "This Product has not been rated yet" : `${rating} From ${product.reviews.length} Reviews`}></Rating></Card.Text>
                        {/*<Card.Text as = 'div'><h3>${product.variants.find(v => v.name === 'default').unitPrice}</h3></Card.Text>*/}
                    </Card.Body>
                
                </Col>


            </Card>  
        </>
    );
}

export default SearchProduct;

function calculateRating(reviews){
    if(reviews.length === 0) return 0;
    let rating = 0;
    for(let review of reviews){
        rating += parseFloat(review.rating);
    }
    rating = rating /reviews.length;
    return rating.toFixed(1);
}