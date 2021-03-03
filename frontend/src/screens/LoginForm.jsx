import React from 'react';
import { Form, Button, Spinner, Nav, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CustomForm from '../components/common/CustomForm';
import { connect } from 'react-redux'
import { login } from './../store/auth';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { toastAction } from './../store/toastAction';

class LoginForm extends CustomForm {

    schema =Yup.object().shape({
        username: Yup.string().required("Username is required..."),
        password: Yup.string().required("Password is required...")     
    });

    initialValues = {
            username: '',
            password: ''
    };

    componentDidUpdate() {
        if(!this.props.auth.loggedIn)return;

        if(this.props.auth.checkOutStarted)
            window.location = '/buyMethod';
        else
            window.location = '/';
        
        
        this.props.loginSuccessful();
        
    }

    submitForm = (values) => {
        this.props.loginUser(values);
        this.setState({logging: true});
    }
    
    render() {
        return (
            <Formik
                validationSchema = {this.schema}
                onSubmit = {this.submitForm}
                initialValues = {this.initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    dirty,
                    errors
                }) => (

                <Row>
                <Col md={5}>
                <Form noValidate onSubmit={handleSubmit}>
                    <h1 className = 'heading'>Log In</h1>
                    {this.props.auth.logging && <div className = 'login-spinner' ><Spinner animation="border"  variant="primary" /></div>}
                    {this.renderFormInput(
                        {   controlId: 'validationFormik01', 
                            label: 'Username', 
                            type:'text', 
                            name:'username', 
                            value: values.username,
                            placeholder: 'Enter your username...',
                            size: 'lg', 
                            onChange: handleChange, 
                            touchValue: touched.username, 
                            errorValue: this.props.auth.error || errors.username
                    
                        }) 
                    }

                    {this.renderFormInput(
                        {   controlId: 'validationFormik02', 
                            label: 'Password', 
                            type:'password', 
                            name:'password', 
                            value: values.password,
                            placeholder: 'Enter your password...',
                            size: 'lg', 
                            onChange: handleChange, 
                            touchValue: touched.password, 
                            errorValue: errors.password
                        }) 
                    }
                        <div>
                            <div className = 'new-customer-message'>
                                A New Customer? 
                            </div>
                            <LinkContainer className = 'new-customer-register-link' to = '/register'>
                                <Nav.Link>Signup From Here</Nav.Link>
                            </LinkContainer> 
                        </div>
                    <Button type='submit'>
                        Login
                    </Button>
                </Form>
                </Col>
                <Col md={4}></Col>
                <Col md={3} >
                    <div >
                        <LinkContainer className='my-5 mx-5' to = '/user-login'>
                            <Button type="button">USER LOGIN</Button>
                        </LinkContainer>
                    </div>         
                </Col>
                </Row>
                )}
            </Formik>
            
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loginUser: (data) => dispatch(login('customer', data)),
    loginSuccessful: () => dispatch(toastAction({ message: "Login Successfull...", type: 'info' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
