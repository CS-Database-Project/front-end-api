import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProfileUpdate from '../components/ProfileUpdate';
import OrdersTable from '../components/OrdersTable';
import { getAuthDetails } from './../store/auth';

function UserProfile(props) {
    const userData = useSelector(getAuthDetails);
    
    return (
        <Container>
            <Row>
                <Col sm={4}><ProfileUpdate userData={userData}/></Col>
                <Col sm={8}><OrdersTable/></Col>
            </Row>
        </Container>
    );
}export default UserProfile;






