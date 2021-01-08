import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

const App = () => {
  return ( 
      <>
        <Header/>
        <Container >
          <Switch>
            
            <Route path='/login' component={LoginForm} />
            <Route path='/cart' component={Cart} />
            <Route path='/' component={Products} />

          </Switch>
        </Container>
        <Footer/>
      </>
   );
}
 
export default App;

