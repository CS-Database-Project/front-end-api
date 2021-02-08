import React from 'react'
import { Form, Button } from 'react-bootstrap'
import CustomForm from '../components/common/CustomForm';

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
                size: 'lg'
        
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
          <Button>Continue</Button>
        </Form>
  
     </>
    );

  }
  
}
  

export default ShippingScreen;