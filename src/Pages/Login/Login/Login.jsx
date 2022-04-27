import React from 'react';
import './Login.css'
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()


    const location = useLocation()
    let from = location.state?.from?.pathname || "/";



    let errorElement
    if (error) {
        errorElement = <div className='border border-danger pt-3 mb-3 col-5 mx-auto text-bold fw-bold' style={{ fontFamily: 'monospace' }}>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>

    }


    if (loading || sending) {
        return <Loading></Loading>
    }


    if (user) {
        // navigate(from, { replace: true });
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://fierce-crag-21501.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true })
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else {
            toast.error('Please enter your email address')
        }
    }



    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container mx-auto' >

            <PageTitle title='Login'></PageTitle>

            <h2 className='text-center mt-5' style={{ fontFamily: 'initial' }}>Please Login</h2>


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


                <div className='mt-4'>
                    <span onClick={resetPassword} className='font-style text-secondary fw-bold text-decoration-none border-bottom border-dark px-2 pb-1'>Forget Password?</span>

                    <p className='pt-3'>Are you new here? <Link to='/register' onClick={navigateRegister} className='text-secondary fw-bold text-decoration-none  border-bottom border-dark px-2 pb-1' style={{ fontFamily: 'initial' }}>Please Register</Link></p>
                </div>

            </Form>

            {errorElement}


            <div className='w-75 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>



        </div>
    );
};

export default Login;