import React from 'react'
import {Form, Button, Col,Row,ListGroup,Image,Card} from 'react-bootstrap' 
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen= ()=>{
    return(
        <>

        <Row>
            <Col md={8}>
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
                    <h2>Order Items</h2>
                    <p>
                        <strong>Your Cart Is Empty</strong>
                    </p>
                </ListGroup.Item>
            </Col>

        </Row>

        </>
    )
}

export default PlaceOrderScreen;