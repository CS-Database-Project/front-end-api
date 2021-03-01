import React from 'react'
import { connect } from 'react-redux'
import CustomForm from '../components/common/CustomForm'
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import {  Formik } from 'formik';
import { updateCustomerDetails } from './../store/entities/customers';
import { toastAction } from './../store/toastAction';

class EditProfile extends CustomForm {
    schema =Yup.object().shape({
        firstName : Yup.string()
                       .required('First Name is required...'),
        lastName : Yup.string()
                      .required('Last Name is required...'),
        birthDate: Yup.date()
                      .min(new Date('1900-01-01'),'Birth Date should be later than 1900-01-01')
                      .max(new Date(), "Birthday must be earlier than current day")
                      .required('Birth Date is required. Ex:- 1998-03-26'),
        email: Yup.string()
                  .email("A valid email must be provided...")
                  .required("Email is required..."),

        phone: Yup.string()
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
        firstName: '', 
        lastName : '',
        birthDate: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    componentDidUpdate() {
        if(this.props.customers.updateSuccessful){
            this.props.history.push('/profile');
            this.props.updateSuccessful();
        }  
    }

    submitForm = (values) => {
        delete values.confirmPassword;
        this.props.updateCustomerDetails(values); 
        console.log(values);
    }

    render(){
    return(
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
                    <h1 className = 'heading'>Edit Profile</h1>
                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validation_Formik01',
                                    label: 'First Name',
                                    type:'text',
                                    name:'firstName',
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
                                {   controlId: 'validation_Formik02',
                                    label: 'Last Name',
                                    type:'text',
                                    name:'lastName',
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
                                {   controlId: 'validation_Formik03',
                                    label: 'Birth Date',
                                    type:'text',
                                    name:'birthDate',
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
                                {   controlId: 'validation_Formik04',
                                    label: 'Phone Number',
                                    type:'text',
                                    name:'phone',
                                    placeholder: 'Your Phone Number...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.phone,
                                    errorValue: errors.phone
                                })
                            }
                        </Col>
                    </Row>
                    {this.renderFormInput(
                                {   controlId: 'validation_Formik02',
                                    label: 'Email',
                                    type:'text',
                                    name:'email',
                                    placeholder: 'Your Email...',
                                    size: 'lg',
                                    onChange: handleChange,
                                    touchValue: touched.email,
                                    errorValue: errors.email
                                })
                            }

                    <Row>
                        <Col>
                            {this.renderFormInput(
                                {   controlId: 'validation_Formik07',
                                    label: 'Address',
                                    type:'text',
                                    name:'address',
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
                                {   controlId: 'validation_Formik08',
                                    label: 'City',
                                    type:'text',
                                    name:'city',
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
                                {   controlId: 'validation_Formik09',
                                    label: 'State',
                                    type:'text',
                                    name:'state',
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
                                {   controlId: 'validation_Formik10',
                                    label: 'Username',
                                    type:'text',
                                    name:'username',
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
                                {   controlId: 'validation_Formik11',
                                    label: 'Password',
                                    type:'password',
                                    name:'password',
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
                        {   controlId: 'validation_Formik12', 
                            label: 'Confirm Password', 
                            type:'password', 
                            name:'confirmPassword', 
                            placeholder: 'Confirm Password...',
                            size: 'lg',
                            onChange: handleChange, 
                            touchValue: touched.confirmPassword, 
                            errorValue: errors.confirmPassword 
                        }) 
                    }
                    <Button type='submit'>Edit</Button>
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
    updateCustomerDetails: (data) => dispatch(updateCustomerDetails(data)),
    updateSuccessful: () => dispatch(toastAction({ message: "Profile Updated Successfully", type: 'info' }))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);