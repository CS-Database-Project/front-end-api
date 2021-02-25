import React, { useEffect } from 'react';
import {Container, Card} from 'react-bootstrap';

function UpdateProfile({ userData }) {

    return (
        <Container>
		    <h1 className = 'userheading'>USER PROFILE</h1>
            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>{`${userData.firstName} ${userData.lastName}`}</Card.Text>
                    <Card.Title>Email Address</Card.Title>
                    <Card.Text>{`${userData.email}`}</Card.Text>
                    <Card.Title>Home Address</Card.Title>
                    <Card.Text>{`${userData.address} `},<br/>{`${userData.city} `},<br/>{`${userData.state} `}</Card.Text>
                    <Card.Title>Phone number</Card.Title>
                    <Card.Text>{`${userData.phone} `}</Card.Text>
                </Card.Body>
            </Card>
        </Container>    
    ); 
}export default UpdateProfile;