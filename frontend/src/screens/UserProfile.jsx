import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProfileUpdate from '../components/ProfileUpdate';
import OrdersTable from '../components/OrdersTable';

function UserProfile(props) {
    return (
        <Container>
            <Row>
                <Col sm={4}><ProfileUpdate/></Col>
                <Col sm={8}><OrdersTable/></Col>
            </Row>
        </Container>
    );
}export default UserProfile;






