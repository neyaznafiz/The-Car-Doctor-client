import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

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

    

    let errorElement
    if (error) {
        errorElement = <div className='border border-danger rounded-pill pt-3 px-4 mb-3 w-75 mx-auto text-bold fw-bold' style={{fontFamily: 'monospace'}}>
        <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }


    if (loading) {
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }


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
        <div className='container mx-auto'>
            <h2 className='text-center mt-5'>Please Login</h2>

            <Form onSubmit={handleSubmit} className="col-5 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-0' ref={emailRef} type="email" placeholder='Email' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='rounded-0' ref={passwordRef} type="password" placeholder='Password' required />
                </Form.Group>
                
                <Button variant="dark w-25" type="submit" >
                    Login
                </Button>

                <p className='pt-4'>Are you new here? <Link to='/register' onClick={navigateRegister} className='text-secondary fw-bold text-decoration-none'  >Please Register</Link></p>

            </Form>

            {errorElement}

            <div className='w-75 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;