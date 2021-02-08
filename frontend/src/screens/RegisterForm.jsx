import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import CustomForm from '../components/common/CustomForm';

class RegisterForm extends CustomForm {
    
    render() {
        return (
            <Form>
                    <h1 className = 'heading'>Register</h1>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicIDNumber", 
                                    label: "ID Number", 
                                    type:'text', 
                                    placeholder:'Enter Your ID Number',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicE-mail", 
                                    label: "Email Address", 
                                    type:'email', 
                                    placeholder:'Enter Your Email',
                                    size: 'lg'
                                }) 
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicFName", 
                                    label: "First Name", 
                                    type:'text', 
                                    placeholder:'Enter Your First Name',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicLName", 
                                    label: "Last Name", 
                                    type:'text', 
                                    placeholder:'Enter Your Last Name', 
                                    size: 'lg'
                                }) 
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicBirthday", 
                                    label: "Birth Date", 
                                    type:'text', 
                                    placeholder:'Enter Your Birth Date',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicPnumber", 
                                    label: "Phone Number", 
                                    type:'text', 
                                    placeholder:'Enter Your Phone Number',
                                    size: 'lg'
                                }) 
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicAddress", 
                                    label: "Home Address", 
                                    type:'text', 
                                    placeholder:'Enter Your Home Address',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicCity", 
                                    label: "City", 
                                    type:'text', 
                                    placeholder:'Enter Your City',
                                    size: 'lg'
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicState", 
                                    label: "State", 
                                    type:'text', 
                                    placeholder:'Enter Your State',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicEPassword", 
                                    label: "Password", 
                                    type:'password', 
                                    placeholder:'Enter Your Password',
                                    size: 'lg'
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: "formBasicCPassword", 
                                    label: "Confrim Password", 
                                    type:'password', 
                                    placeholder:'Confirm Your Password',
                                    size: 'lg'
                                }) 
                            }
                        </Col>
                    </Row>
                    <Button>SUBMIT</Button>
                </Form> 
            );
        }
    }
    
    export default RegisterForm;