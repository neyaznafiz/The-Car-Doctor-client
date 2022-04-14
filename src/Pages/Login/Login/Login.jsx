import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()


    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }


    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email"  required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>Are you new here? <Link to='/register' onClick={navigateRegister} className='text-secondary fw-bold text-decoration-none'  >Please Register</Link></p>

        </div>
    );
};

export default Login;