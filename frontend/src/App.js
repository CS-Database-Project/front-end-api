import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import LoginForm from './screens/LoginForm';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Footer from './components/Footer';
import SearchResult from './screens/SearchResult';


const App = () => {
  return ( 
      <>
        <Header/>
        <Container >
          <main>
            <Switch>
              <Route path='/placeOrder' component={PlaceOrderScreen} /> 
              <Route path='/payment' component={PaymentScreen} /> 
              <Route path='/login' component={LoginForm} />
              <Route path='/cart' component={Cart} />
              <Route path='/search' component={SearchResult} />
              <Route path='/' component={HomeScreen} />
            </Switch>
          </main>
        </Container>
        <Footer/>
      </>
   );
}
 
export default App;

