import React from 'react';
import { Form, Button, Spinner, Container } from 'react-bootstrap';
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
        if(this.props.auth.loggedIn){
            this.props.history.goBack();
            this.props.loginSuccessful();
        }
        
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
                    <Button 
                        type='submit'
                    >
                        Login
                    </Button>
                </Form>
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
