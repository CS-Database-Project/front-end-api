import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CustomForm extends Component {

    renderFormInput({controlId, label, type = 'text', placeholder, text = '', size = ''}){
        return(
            <Form.Group controlId={controlId}>
                <Form.Label className = 'form-label'>{label}</Form.Label>
                <Form.Control type={type} placeholder={placeholder} size = {size} />
                <Form.Text className="text-muted">{text}</Form.Text>
            </Form.Group>
        );
    }
}

export default CustomForm;