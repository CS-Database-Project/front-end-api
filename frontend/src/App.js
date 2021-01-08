import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

const App = () => {
  return ( 
      <>
        <Header/>
        <Container >
          <LoginForm/>
        </Container>
        <Footer/>
      </>
   );
}
 
export default App;

