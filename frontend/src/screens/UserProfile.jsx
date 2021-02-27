import React, { useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ProfileUpdate from '../components/ProfileUpdate';
import OrdersTable from '../components/OrdersTable';
import { getAuthDetails } from './../store/auth';
import {getOrderByCustomerId,getAllOrders, loadOrders} from './../store/entities/orders'

function UserProfile(props) {
    const dispatch = useDispatch();
    const userData = useSelector(getAuthDetails);
    const orderData = useSelector(getOrderByCustomerId(userData.customerId));

    useEffect(() => {
        console.log("Loading")
        dispatch(loadOrders());
    });

    return (
        <Container>
            <Row>
                <Col className="px-3" md={4}><ProfileUpdate userData={userData}/></Col>
                <Col md={8}><OrdersTable orderData={orderData}/></Col>
            </Row>
        </Container>
    );
}export default UserProfile;






