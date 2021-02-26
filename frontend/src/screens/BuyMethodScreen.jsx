import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../bootstrap.min.css'
import CommonListGroup from '../components/common/CommonListGroup'
import CheckoutSteps from '../components/CheckoutSteps'


function BuyMethodScreen ({history}){
    /*const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const  [paymentMethod, setPaymentMethod]= useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod({address,city, postalcode,country}))
        history.push('/payment')
    }*/

 
    
        
    return( <div><FormContainer>
            <CheckoutSteps step1 step2 />

            <h1 className='my-3'>Buy Method</h1>
            <Form className='my-3'>
                <Form.Group>
                     <Form.Label as='legend'>Select Method</Form.Label>
                </Form.Group >
                <Col >
                     <Form.Check className='my-3' onChange={e=>radioEvent(e)}
                         type='radio'  
                         label='Home Delivery' 
                         id='HomeDelivery' 
                         name='buyMethod' 
                         value='HomeDelivery'  
                         //checked onChange={(e)=>setPaymentMethod(e.target.value)}
                         >
                     </Form.Check>
                     <Form.Check className='my-3' onChange={e=>radioEvent(e)}
                         type='radio' 
                         label='Store Pickup' 
                         id='StorePickup' 
                         name='buyMethod' 
                         value='StorePickup'  
                         //checked onChange={(e)=>setPaymentMethod(e.target.value)}
                         >
                     </Form.Check>
                 </Col>
                 
                 <Button 
                //  onClick = {() => {

                //     const target=this.radioEvent;
                //     console.log(target);
                //     if(target==='StorePickup'){
                //         history.push("/payment");
                        
                //     }else{
                //         history.push("/shipping");
                //     }}}
                    type='submit' variant='primary'>
                 Continue
                 </Button>
            </Form>
        </FormContainer></div>);
        
   


};

export default BuyMethodScreen;

function radioEvent(e){
    console.log(e.target.value);
};


