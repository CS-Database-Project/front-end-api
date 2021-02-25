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
        setRating(calculateRating(product.reviews));    
    }, [product, dispatch]);

    

    return (
        <>
            
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={`/images/${product.productId}.jpg`} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.title}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={rating} message = {rating === 0 ? "This Product has not been rated yet" : `${rating} From ${product.reviews.length} Reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>{product.description}</h5>
                        </ListGroup.Item>
                        
                    </ListGroup>
                    
                    <ListGroup variant="flush">
                        <h5>Reviews :</h5>
                            {product.reviews.map(r=><ListGroup.Item>
                                
                                <Rating rating={r.rating}></Rating>
                                <h6>{r.description}</h6>
                            </ListGroup.Item>)}
                    </ListGroup>
                </Col>
                
            </Row>
            <h5>Variants :</h5>
    
            <Table >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>unit price</th>
                        <th>count in stock</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                            {product.variants.map(v=><ListGroup.Item>
                                <h6>{v.name}</h6>
                            </ListGroup.Item>)}
                    </td>
                    <td>
                            {product.variants.map(v=><ListGroup.Item>
                                <h6>{v.unitPrice}</h6>
                            </ListGroup.Item>)}
                    </td>
                    <td>
                            {product.variants.map(v=><ListGroup.Item>
                                <h6>{v.countInStock}</h6>
                            </ListGroup.Item>)}
                    </td>
                </tbody>
            </Table>
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