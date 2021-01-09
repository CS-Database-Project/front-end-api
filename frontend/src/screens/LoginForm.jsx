import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomForm from '../components/common/CustomForm';

class LoginForm extends CustomForm {
    
    render() {
        return (
            <>
                <Form>
                    <h1 className = 'heading'>Log In</h1>
                    {this.renderFormInput(
                        {   controlId: "formBasicEmail", 
                            label: "Email Address", 
                            type:'email', 
                            placeholder:'Enter Your Email',
                            size: 'lg'
                    
                        }) 
                    }
                    {this.renderFormInput(
                        {   controlId: "formBasicPassword", 
                            label: "Password", 
                            type:'password', 
                            placeholder:'Enter Your Password', 
                            size: 'lg'
                        }) 
                    }
                    <Button>Log in</Button>
                </Form>   
            </>
        );
    }
}

export default LoginForm;