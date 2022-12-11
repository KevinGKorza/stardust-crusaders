// importing our dependencies and what we need from other files

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { createUser } from '../utils/API';
import Auth from '../utils/auth'

//Setting up form state, validation, and alert for appropriate information for the user
const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.precentDefault();
            event.stopPropogation();
        }
        try{
            const response = await createUser(userFormData);
            if (!response.ok){
                throw new Error('Uh oh! Something is wrong!');
            }
            const {token, user} = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Your sign up information is wrong, please try again!
                </Alert>
                <br>
                </br>
                <Form.Group>
                    <Form.Label htmlFor='username'>Your Username:<br></br></Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Your username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                    />
                    <Form.Control.Feedback type='invalid'>You need to have a Username!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <br>
                    </br>
                    <Form.Label htmlFor='email'>Your Email:<br></br></Form.Label>
                    <Form.Control
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                    />
                    <Form.Control.Feedback type='invalid'>Your Email is Required!</Form.Control.Feedback>
                </Form.Group>
                <br>
                </br>
                <Form.Group>
                    <Form.Label htmlFor='password'>Your Password: <br></br></Form.Label>
                    <Form.Control
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                    />
                    <Form.Control.Feedback type='invalid'>Your Password is Required!</Form.Control.Feedback>
                </Form.Group>
                <br>
                </br>
                <Button
                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                type='submit'
                variant='success'>
                    Submit
                </Button>
            </Form>
        </div>
    );

};

//Exporting our SignupForm

export default SignupForm;
