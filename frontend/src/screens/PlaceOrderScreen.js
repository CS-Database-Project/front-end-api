import React from 'react'
import {Form, Button, Col,Row,ListGroup,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps'
import { getLoggedInStatus, getAuthDetails , setCheckOutStarted} from '../store/auth';
import { getItemsInCart } from './../store/cart';
import { toastAction } from './../store/toastAction';
import {placeOrder } from '../store/entities/orders';

const PlaceOrderScreen= ({history})=>{
    const dispatch = useDispatch();
   // let orderDetails =[];
    const items = useSelector(state => state.cart)
    console.log(items);
    const customerDetails = useSelector(getAuthDetails);
    const orderDetails ={
        "customerId":customerDetails.customerId,
        // "orderDate":Date.now(),
        // "orderStatusId":'Paid',
        // "comments":"",
        // "dispatchedDate":"",
        // "paymentMethod":"PayPal",
        // "deliveryMethod":"Deliver",
        "products":items
    }
   // orderDetails.push(customerDetails.customerId);
   // orderDetails.push(items);
    console.log(orderDetails);
    //const {customerDetails.customerId, }
    const loggedIn = useSelector(getLoggedInStatus);

    return(
        
        <>
        {/*<CheckoutSteps step1 step2 step3 step4 step5/>*/}
        <Row>
            <Col md={8} className='my-5'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Addresss:</strong>
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method:</strong>
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h3 style={{marginBottom:'30px'}}>Order Summary</h3>
                    {items.map(i => 
                    <Row className='my-2 mx-2'>
                        <Card style={{width:'100%'}}>
                        <Col style={{display:'flex'}}>
                            {/*<Link to = {`/products/${i.productId}`}>*/}
                                <Card.Img src={`/images/${i.productId}.jpg`}  variant = 'top' style={{height:'7rem', width:'8rem', marginTop:'0.5rem'}}/>
                            {/*</Link>*/}
    
                            <Card.Body style={{marginLeft:'20px'}}>
                                {/*<Link to = {`/products/${i.productId}`}>*/}
                                    <Card.Title as='div' style={{fontSize:'17px', fontWeight:'500'}}><strong>{i.title}</strong></Card.Title>
                                {/*</Link>*/}
                                {/*<Card.Text as = 'div'><Rating rating = {rating} message = {rating === 0 ? "This Product has not been rated yet" : `${rating} From ${product.reviews.length} Reviews`}></Rating></Card.Text>*/}
                                <Card.Text as = 'div'><h3 style={{fontSize:'17px'}}>${i.unitPrice}</h3></Card.Text>
                                <Card.Text as = 'div'><h3 style={{fontSize:'15px'}}>Order quantity: {i.quantity}</h3></Card.Text>
                            </Card.Body>
                        </Col>
                        </Card>
                    </Row>
                    )}

                </ListGroup.Item>
            </Col>

            <Col lg={4}>
                <Card className='my-5'>
                        <Card.Body>
                            <h2 className ='my-3'>Total {getTotalNumberOfItems(items)} items</h2>
                            <hr></hr>
                            <Card.Title>Total Amount: <strong style={{fontSize:'20px', marginLeft:'0.5rem'}}>${getTotalPrice(items)}</strong></Card.Title>
                            <hr></hr>
                            <Button className = 'my-3' style={{width:'100%', fontSize:'15px'}}
                                disabled={items.length>0 ? false : true}
                                onClick = {() => {
                                    if(!loggedIn){
                                        history.push("/login");
                                        dispatch(setCheckOutStarted());
                                        dispatch(toastAction({ message: "Please Login Before Checkout...", type: 'info'}))
                                    }else{
                                        dispatch(placeOrder (orderDetails));
                                    }
                                
                            }}>
                                Place Order
                            </Button>

                        </Card.Body>

                    </Card>
            
            </Col>

        </Row>

        </>
    )
}

export default PlaceOrderScreen;

function getTotalNumberOfItems(items){
    let count = 0;
    for(let item of items)
        count = count + parseInt(item.quantity);
    return count;
}

function getTotalPrice(items){
    let total = 0;
    for(let item of items)
        total = total + item.total;
    return total.toFixed(2);
}