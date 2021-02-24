import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import CustomForm from '../components/common/CustomForm';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { toastAction } from './../store/toastAction';
class RegisterForm extends CustomForm {

    schema =Yup.object().shape({
        idNumber: Yup.string()
                     .matches(/^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/, "Invalid ID Number. Ex:- 123456789B")
                     .required("ID Number is required..."),
        email: Yup.string()
                  .email("A valid email must be provided...")
                  .required("Email is required..."),
        firstName : Yup.string()
                       .required('First Name is required...'),
        lastName : Yup.string()
                      .required('Last Name is required...'),
        birthDate: Yup.date()
                      .min(new Date('1900-01-01'),'Birth Date should be later than 1900-01-01')
                      .max(new Date(), "Birthday must be earlier than current day")
                      .required('Birth Date is required. Ex:- 1998-03-26'),
        phoneNumber: Yup.string()
                        .matches(/^(?:7|0|(?:\+94))[0-9]{9,9}$/, 'Invalid Phone Number. Ex:- 0123458907')
                        .required('Phone number is required...'),
        address: Yup.string()
                    .required('Home Address is required...'),
        city: Yup.string()
                 .required('City is required...'),
        state: Yup.string()
                  .required('State is required...'),
        username: Yup.string()
                     .min(5, "At least five characters should be used")
                     .max(20, "Use less than 20 characters")
                     .required('Username is required...'),
        password: Yup.string()
                     .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
                     .required('Password is required...'),
        confirmPassword: Yup.string()
                            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
                            .oneOf([Yup.ref('password'), null], "Does not match with password")
                            .required('Please confirm your password...')
    });

    initialValues = {
        idNumber: '', 
        email: '',
        firstName: '', 
        lastName : '',
        birthDate: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    submitForm = (values) => {
        if(this.props.customers.registerSuccessful){
            console.log("Register Successfull");
        }
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
                    <h1 className = 'heading'>Register</h1>
                    {/* {this.props.auth.logging && <div className = 'login-spinner' ><Spinner animation="border"  variant="primary" /></div>} */}
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik01', 
                                    label: 'ID Number', 
                                    type:'text', 
                                    name:'idNumber', 
                                    value: values.idNumber,
                                    placeholder: 'Your ID Number...',
                                    size: 'lg', 
                                    onChange: handleChange, 
                                    touchValue: touched.idNumber, 
                                    errorValue: errors.idNumber
                            
                                }) 
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik02',
                                    label: 'Email',
                                    type:'text',
                                    name:'email',
                                    value: values.email,
                                    placeholder: 'Your Email...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.email,
                                    errorValue: errors.email
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik03',
                                    label: 'First Name',
                                    type:'text',
                                    name:'firstName',
                                    value: values.firstName,
                                    placeholder: 'Your First Name...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.firstName,
                                    errorValue: errors.firstName
                                })
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik04',
                                    label: 'Last Name',
                                    type:'text',
                                    name:'lastName',
                                    value: values.lastName,
                                    placeholder: 'Your Last Name...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.lastName,
                                    errorValue: errors.lastName
                                })
                            }
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik05',
                                    label: 'Birth Date',
                                    type:'text',
                                    name:'birthDate',
                                    value: values.birthDate,
                                    placeholder: 'Your Birth Date...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.birthDate,
                                    errorValue: errors.birthDate
                                })
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik06',
                                    label: 'Phone Number',
                                    type:'text',
                                    name:'phoneNumber',
                                    value: values.phoneNumber,
                                    placeholder: 'Your Phone Number...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.phoneNumber,
                                    errorValue: errors.phoneNumber
                                })
                            }
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik07',
                                    label: 'Address',
                                    type:'text',
                                    name:'address',
                                    value: values.address,
                                    placeholder: 'Your Address...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.address,
                                    errorValue: errors.address
                                })
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik08',
                                    label: 'City',
                                    type:'text',
                                    name:'city',
                                    value: values.city,
                                    placeholder: 'Your City...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.city,
                                    errorValue: errors.city
                                })
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik09',
                                    label: 'State',
                                    type:'text',
                                    name:'state',
                                    value: values.state,
                                    placeholder: 'Your State...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.state,
                                    errorValue: errors.state
                                })
                            }
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik10',
                                    label: 'Username',
                                    type:'text',
                                    name:'username',
                                    value: values.username,
                                    placeholder: 'Your Username...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.username,
                                    errorValue: errors.username
                                })
                            }
                        </Col>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validationFormik11',
                                    label: 'Password',
                                    type:'password',
                                    name:'password',
                                    value: values.password,
                                    placeholder: 'Your Password...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.password,
                                    errorValue: errors.password
                                })
                            }
                        </Col>
                    </Row>

                     {this.renderFormInput(
                        {   controlId: 'validationFormik12', 
                            label: 'Confirm Password', 
                            type:'password', 
                            name:'confirmPassword', 
                            value: values.confirmPassword,
                            placeholder: 'Confirm Password...',
                            size: 'lg', 
                            onChange: handleChange, 
                            touchValue: touched.confirmPassword, 
                            errorValue: errors.confirmPassword
                        }) 
                    }

                    
                    <Button 
                        type='submit'
                    >
                        Register
                    </Button>
                    <br/>
                    <br/>
                </Form>
                )}
            </Formik> 
        )
    }
}   
const mapStateToProps = state => ({
    customers: state.entities.customers
});

const mapDispatchToProps = dispatch => ({
    registerCustomer: (data) => dispatch(registerCustomer(data)),
    registerSuccessful: () => dispatch(toastAction({ message: "Register Successfull...", type: 'info' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);