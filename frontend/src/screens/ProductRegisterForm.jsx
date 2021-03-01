import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button, Row, Col, Spinner } from 'react-bootstrap';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { toastAction } from '../store/toastAction';


function ProductRegisterForm(){

    const [ schema, setSchema ] = useState({ 
                            title : Yup.string()
                                    .required('Title is required...'),
                            sku : Yup.number()
                                        .positive("SKU should be a positive number...")
                                        .integer("Whole number is required...")
                                        .required('SKU is required...'),
                            weight: Yup.string().matches(/[0-9]+(\.[0-9][0-9])/, "Weight must be positive and two decimal places. Ex: 12.89").required("Weight is required..."),
                            description: Yup.string().required("Description is required..."),
                            variant0: Yup.string().required("Variant Name is required..."),
                            unitPrice0: Yup.string().matches(/[0-9]+(\.[0-9][0-9])/, "Unit Price must be to two decimal places...").required("Unit Price is required..."),
                            countInStock0: Yup.number().integer().required("Count in stock is required...")
            });

    const [initialValues, setInitialValues ] = useState({
                                                title: '', 
                                                sku : '',
                                                weight: '',
                                                description: '',
                                                variant0: '',
                                                unitPrice0: '',
                                                countInStock0: ''
                                            });
    
    const [ variants, setVariants ] = useState([{}]);
    const [formElements, setFormElements] = useState(4);   
    
    
    const handleVariantAdded = () => {
        const newVariants = [...variants, {}];
        const newSchema = {...schema, 
                            [`variant${variants.length}`]: Yup.string().required("Variant Name is required..."),
                            [`unitPrice${variants.length}`]: Yup.string().matches(/[0-9]+(\.[0-9][0-9])/, "Unit Price must be to two decimal places...").required("Unit Price is required..."),
                            [`countInStock${variants.length}`]: Yup.number().integer().required("Count in stock is required...")
        };

        const newInitialValues = {...initialValues,
                             [`variant${variants.length}`]: '',
                             [`unitPrice${variants.length}`]: '',
                             [`countInStock${variants.length}`]: ''
        };

        setVariants(newVariants);
        setSchema(newSchema);
        setInitialValues(newInitialValues);
    }

    const handleVariantDeleted = () => {
        const newVariants = [...variants];
        newVariants.pop();
        const newSchema = {...schema};
        delete newSchema[`variant${variants.length-1}`];
        delete newSchema[`unitPrice${variants.length-1}`];
        delete newSchema[`countInStock${variants.length-1}`];

        const newInitialValues = {...initialValues};
        delete newInitialValues[`variant${variants.length-1}`];
        delete newInitialValues[`unitPrice${variants.length-1}`];
        delete newInitialValues[`countInStock${variants.length-1}`];

        setVariants(newVariants);
        setSchema(newSchema);
        setInitialValues(newInitialValues);
    }

    const submitForm = (values) => {
        console.log(values);
    } 
    
   
    return (
        <Formik
            validationSchema = {Yup.object().shape(schema)}
            onSubmit = {submitForm}
            initialValues = {initialValues}
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
                <h1 className = 'heading my-2'>User Register</h1>
                <Row>
                    <Col>
                        <Form.Group controlId= 'validationFormik01'>
                            <Form.Label className = 'form-label'>Title</Form.Label>
                            <Form.Control 
                                type='text'
                                name='title' 
                                value={values.title}
                                onChange={handleChange}
                                placeholder='Product Title'
                                isValid={touched.title && !errors.title}
                                isInvalid={!!errors.title}
                                size = {'lg'} 
                            />
                            <FormControl.Feedback type='invalid'>{errors.title}</FormControl.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId= 'validationFormik02'>
                            <Form.Label className = 'form-label'>SKU</Form.Label>
                            <Form.Control 
                                type='text'
                                name='sku' 
                                value={values.sku}
                                onChange={handleChange}
                                placeholder='SKU'
                                isValid={touched.sku && !errors.sku}
                                isInvalid={!!errors.sku}
                                size = {'lg'} 
                            />
                            <FormControl.Feedback type='invalid'>{errors.sku}</FormControl.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId= 'validationFormik03'>
                            <Form.Label className = 'form-label'>Weight(g)</Form.Label>
                            <Form.Control 
                                type='text'
                                name='weight' 
                                value={values.weight}
                                onChange={handleChange}
                                placeholder='Weight'
                                isValid={touched.weight && !errors.weight}
                                isInvalid={!!errors.weight}
                                size = {'lg'} 
                            />
                            <FormControl.Feedback type='invalid'>{errors.weight}</FormControl.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>

                        <Form.Group controlId= 'validationFormik04'>
                            <Form.Label className = 'form-label'>Description</Form.Label>
                            <Form.Control 
                                type='text'
                                name='description' 
                                value={values.description}
                                onChange={handleChange}
                                placeholder='Description'
                                isValid={touched.description && !errors.description}
                                isInvalid={!!errors.description}
                                size = {'lg'} 
                            />
                            <FormControl.Feedback type='invalid'>{errors.description}</FormControl.Feedback>
                        </Form.Group>
                        
                    </Col>
                </Row>
                <h3>Variants</h3>
                {variants.map( v =>{
                    const index = variants.findIndex(va => va === v );
                    return (
                        <>
                        <Row className ='mx-4 my-3'>

                            <Col>
                                <Form.Group controlId= {`validationFormik${formElements + index + 1 >= 10 ? `${formElements + index + 1}`: `0${formElements + index + 1}` }`}>
                                    <Form.Label className = 'form-label'>Variant</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name={`variant${index}`}
                                        value={values[`variant${index}`]}
                                        onChange={handleChange}
                                        placeholder='Variant Name'
                                        isValid={touched[`variant${index}`] && !errors[`variant${index}`]}
                                        isInvalid={!!errors[`variant${index}`]}
                                        size = {'lg'} 
                                    />
                                    <FormControl.Feedback type='invalid'>{errors[`variant${index}`]}</FormControl.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId= {`validationFormik${formElements + index + 2 >= 10 ? `${formElements + index + 2}`: `0${formElements + index + 2}`}`}>
                                    <Form.Label className = 'form-label'>Unit Price</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name={`unitPrice${index}`}
                                        value={values[`unitPrice${index}`]}
                                        onChange={handleChange}
                                        placeholder='Unit Price'
                                        isValid={touched[`unitPrice${index}`] && !errors[`unitPrice${index}`]}
                                        isInvalid={!!errors[`unitPrice${index}`]}
                                        size = {'lg'} 
                                    />
                                    <FormControl.Feedback type='invalid'>{errors[`unitPrice${index}`]}</FormControl.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId= {`validationFormik${formElements + index + 3 >= 10 ? `${formElements + index + 3}`: `0${formElements + index + 2}`}`}>
                                    <Form.Label className = 'form-label'>Count In Stock</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name={`countInStock${index}`}
                                        value={values[`countInStock${index}`]}
                                        onChange={handleChange}
                                        placeholder='Count In Stock'
                                        isValid={touched[`countInStock${index}`] && !errors[`countInStock${index}`]}
                                        isInvalid={!!errors[`countInStock${index}`]}
                                        size = {'lg'} 
                                    />
                                    <FormControl.Feedback type='invalid'>{errors[`countInStock${index}`]}</FormControl.Feedback>
                                </Form.Group>
                        
                            </Col>

                            <Col>
                                { index === variants.length-1 && <div className ='my-4'>
                                    <Button onClick = {() => handleVariantAdded()} className = 'mx-2' variant='primary'>+</Button>
                                    {index !==0 && <Button onClick = {() => handleVariantDeleted()} className = 'mx-2' variant='danger'>-</Button>}
                                </div>}
                            </Col>

                        </Row>
                        </>
                    ); 
                })}

                <Button 
                    type='submit'
                >
                    Register Product
                </Button>
                <br/>
                <br/>
            </Form>
            )}
        </Formik> 
    )
    
}   


export default ProductRegisterForm;

