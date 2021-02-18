import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from './../products';

function HomeScreen(props) {
    return (
        <div className = 'mb-4'>
            <h1 className = 'my-3'>Latest Products</h1>
            <Row>
                    {products.map( product => 
                        <Col key = {product.product_id} sm = {1} md = {2} lg = {3} xl = {4}>
                            <Product product = {product}></Product>
                        </Col>
                    )} 
            </Row>
        </div>
    );
}

export default HomeScreen;