import React from 'react';
import {Navbar,FormControl, Nav, Button, InputGroup} from 'react-bootstrap';

function NavbarComponent(props) {
    return (
        <>
            <Navbar bg="primary" >
                <Navbar.Brand href="/">C E-Commerce</Navbar.Brand>
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
                        <Nav.Link href="/cart" className = 'navbar-item'><i className="fas fa-shopping-cart"></i><span>Cart</span></Nav.Link>
                        <Nav.Link href="/login" className = 'navbar-item'><i className="fas fa-user"></i><span>Sign In</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               
            </Navbar>
        </>  
    );
}

export default NavbarComponent;