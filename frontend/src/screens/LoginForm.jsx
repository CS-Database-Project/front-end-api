import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomForm from '../components/common/CustomForm';

class LoginForm extends CustomForm {
    
    render() {
        return (
            <div>
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
                    <a className="Userlink" href="/reset">Forgot Pasword?</a><br/><br/>
                    <Button>Log in</Button><br/><br/>
                </Form>
                <p style={{fontSize:'20px'}}>New Customer? <a className="Userlink" href="/register">Register</a></p>  
            </div>
        );
    }
}

export default LoginForm;