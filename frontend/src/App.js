import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import LoginForm from './screens/LoginForm';
import Footer from './components/Footer';

const App = () => {
  return ( 
      <>
        <Header/>
        <Container >
          <Switch>
            
            <Route path='/login' component={LoginForm} />
            <Route path='/cart' component={Cart} />
            <Route path='/' component={HomeScreen} />

          </Switch>
        </Container>
        <Footer/>
      </>
   );
}
 
export default App;

