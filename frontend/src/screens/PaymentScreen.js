import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../bootstrap.min.css'
import {CheckoutSteps} from '../components/CheckoutSteps'


const PaymentScreen = ({history}) => {
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

    return(
        <FormContainer>
            

            <h1>Payment</h1>
            <Form >
                <Form.Group>
                     <Form.Label as='legend'>Select Method</Form.Label>
                </Form.Group >
                <Col >
                     <Form.Check 
                         type='radio' 
                         label='PayPal or Credit Card' 
                         id='Paypal' 
                         name='paymentMethod' 
                         value='PayPal'  
                         //checked onChange={(e)=>setPaymentMethod(e.target.value)}
                         >
                     </Form.Check>
                     <Form.Check 
                         type='radio' 
                         label='Stripe' 
                         id='Stripe' 
                         name='paymentMethod' 
                         value='Stripe'  
                         //checked onChange={(e)=>setPaymentMethod(e.target.value)}
                         >
                     </Form.Check>
                 </Col>
                 
                 <Button type='submit' variant='primary'>
                 Continue
                 </Button>
            </Form>
        </FormContainer>
        
    )

}

export default PaymentScreen;
