import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import LoginForm from './screens/LoginForm';
import RegisterForm from './screens/RegisterForm';
import UserProfile from './screens/UserProfile';
import ResetPassword from './screens/FogotPassword';
// import SearchResult from './screens/SearchResult';
import ShippingScreen from './screens/ShippingScreen';
import Footer from './components/Footer';
import PaymentScreen from './screens/PaymentScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return ( 
      <>
        <Header/>
        <Container >
          <main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover            
            ></ToastContainer>
            <Switch>
              <Route path='/shipping' component={ShippingScreen} />
              {/* <Route path='/placeOrder' component={PlaceOrderScreen} />  */}
              <Route path='/payment' component={PaymentScreen} /> 
              <Route path='/login' component={LoginForm} />
              <Route path='/cart' component={Cart} />
              <Route path='/register' component={RegisterForm} />
              <Route path='/profile' component={UserProfile} />
              <Route path='/reset' component={ResetPassword} />
              {/* <Route path='/search' component={SearchResult} /> */}
              <Route path='/products/:productId' component = {ProductScreen} />
              <Route path='/' component={HomeScreen} />
              <Route path='/' exact component={HomeScreen} />
            </Switch>
          </main>
        </Container>
        <Footer/>
      </>
   );
}
 
export default App;

