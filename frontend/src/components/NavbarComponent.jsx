import React from 'react';
import {Navbar,FormControl, Nav, Button, InputGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

function NavbarComponent(props) {

    const auth = useSelector(state => state.auth);

    return (
        <>
            <Navbar bg="primary" >
                <LinkContainer to ='/'><Navbar.Brand>C E-Commerce</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <InputGroup id = 'product-search-bar'>
                            <FormControl
                                placeholder="Search products..."
                                aria-label="searchProduct"
                                aria-describedby="basic-addon2"
                                size = 'lg'
                            />
                            <InputGroup.Append id = 'product-search-button'>
                                <Button className = 'pl-2.5 pr-2.5' variant="primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    <Nav className="ml-auto">
                        <LinkContainer to = '/cart'>
                            <Nav.Link className = 'navbar-item'><i className="fas fa-shopping-cart"></i><span>Cart</span></Nav.Link>
                        </LinkContainer>
                        {!auth.loggedIn  && <LinkContainer to = '/login'>
                            <Nav.Link className = 'navbar-item'><span>Login</span></Nav.Link>
                        </LinkContainer>}

                        {auth.loggedIn && <LinkContainer to = '/profile'>
                            <Nav.Link className = 'navbar-item'><i className="fas fa-user"></i><span>{auth.data.firstName}</span></Nav.Link>
                        </LinkContainer>}
                        {auth.loggedIn && <LinkContainer to = '/logout'>
                            <Nav.Link className = 'navbar-item'><span>Logout</span></Nav.Link>
                        </LinkContainer>}
                    </Nav>
                </Navbar.Collapse>
               
            </Navbar>
        </>  
    );
}

export default NavbarComponent;