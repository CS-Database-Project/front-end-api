import React, {useState, useEffect}  from 'react';
import {Navbar,FormControl, Nav, Button, InputGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function NavbarComponent(props) {

    const auth = useSelector(state => state.auth);
    let URL = (window.location.href).split('/');
    URL = URL[URL.length-1];
    const [keyWord, setKeyword] = useState();
    const history = useHistory();

    const SubmitHandler = () => {
        if(keyWord){
            if(!keyWord.includes('/') && !keyWord.includes('%')){
                if(keyWord.trim() !== "" && URL !==keyWord){
                    console.log('2 stage');
                    URL = `/search/${keyWord.trim().replaceAll(" ","+")}`;
                }
            }
        }
        history.push(URL);
    }

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
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <InputGroup.Append id = 'product-search-button'>
                                <Button className = 'pl-2.5 pr-2.5' variant="primary" onClick={SubmitHandler}>Search</Button>
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