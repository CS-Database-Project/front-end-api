import React from 'react'
import { Form, Button } from 'react-bootstrap'
import CustomForm from '../components/common/CustomForm'
import { connect } from 'react-redux'
import { login } from './../store/auth'
import CheckoutSteps from '../components/CheckoutSteps'
import { getAuthDetails } from './../store/auth';
import { useSelector, useDispatch } from 'react-redux'

class ShippingScreen extends CustomForm {

  

  render(){
 
    return(
   
      <>   
        <Form>
        
        <h1>Shipping</h1>
          {this.renderFormInput(
            {   controlId: "formBasicAddress", 
                label: "Address", 
                type:'text', 
                placeholder:'Enter Your Address',
                size: 'lg'
                
        
            }) 
          }
          {this.renderFormInput(
            {   controlId: "formBasicCity", 
                label: "City", 
                type:'text', 
                placeholder:'Enter Your City',
                size: 'lg'
        
            }) 
          }
          {this.renderFormInput(
            {   controlId: "formBasicPostalCode", 
                label: "Postal Code", 
                type:'text', 
                placeholder:'Enter Your Postal Code',
                size: 'lg',
                value: this.prop.auth.address
        
            }) 
          }
          {this.renderFormInput(
            {   controlId: "formBasicEmail", 
                label: "Country", 
                type:'text', 
                placeholder:'Enter Your Country',
                size: 'lg'
        
            }) 
          }
          <Button onClick={()=> window.location='/payment'}>Continue</Button>
        </Form>
  
     </>
    );

  }
  
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(login('customer', data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingScreen);
  

// export default ShippingScreen;