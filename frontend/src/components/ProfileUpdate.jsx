import React, { useEffect } from 'react';
import {Container, Card} from 'react-bootstrap';

function UpdateProfile({ userData }) {

    return (
        <Container>
		    <h1 className = 'userheading'>USER PROFILE</h1>
            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{`${userData.firstName} ${userData.lastName}`}</Card.Title>
                    <Card.Text>Ayodya</Card.Text>
                    <Card.Title>Email Address</Card.Title>
                    <Card.Text>ayodyaerandi2018@gmail.com</Card.Text>
                    <Card.Title>Home Address</Card.Title>
                    <Card.Text>"Sisilasa",Bogahalanda,<br/>Gammedapitiya,<br/>Hakmana</Card.Text>
                    <Card.Title>Phone number</Card.Title>
                    <Card.Text>0714689765</Card.Text>
                </Card.Body>
            </Card>
        </Container>    
    ); 
}export default UpdateProfile;