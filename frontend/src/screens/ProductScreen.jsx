import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import { getProductById, loadProducts, productUpdated } from '../store/entities/products';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row,Col,Image ,ListGroupItem,ListGroup,Card,Table} from 'react-bootstrap';
import Rating from '../components/Rating'
// import { addToCart, removeFromCart, emptyCart, updateItemCount } from './../store/cart';
// import { invokeToast } from '../store/toastAction';

const ProductScreen = ({match}) => {
    const dispatch = useDispatch();
    const product = useSelector(getProductById(match.params.productId));
    
    const [rating, setRating ] = useState(0);

    useEffect(() => {
        dispatch(loadProducts());
        console.log("Rendering Product", product);
    });

    return (
        <>
            <div>{product.title}</div>
        </>
    )
}

export default ProductScreen;

function calculateRating(reviews){
    if(reviews.length === 0) return 0;
    let rating = 0;
    for(let review of reviews){
        rating += parseFloat(review.rating);
    }
    rating = rating /reviews.length;
    return rating.toFixed(1);
}
