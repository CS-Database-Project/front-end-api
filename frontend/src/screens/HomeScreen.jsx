import React, { useEffect } from 'react';
import { Row, Col, Button,Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { loadProducts, getAllProducts } from './../store/entities/products';


const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(getAllProducts);
  

    useEffect( () => {
        dispatch(loadProducts());
    });

    return (
        <div className = 'mb-4'>
            <h1 className = 'my-3'>Latest Products</h1>
            <Row>
                    {products.list.map( product => 
                        <Col key = {product.productId} sm = {1} md = {2} lg = {3} xl = {4}>
                            <Product product = {product}></Product>
                        </Col>
                    )} 
            </Row>
        </div>
    );
}
 
export default HomeScreen;

