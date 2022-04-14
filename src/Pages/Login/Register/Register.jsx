import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, errorForUpdateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate()


    const navigateLogin = event => {
        navigate('/login')
    }

    let errorElement
    if (error) {
        errorElement = <div className='border border-danger pt-3 mb-3 col-5 mx-auto text-bold fw-bold' style={{ fontFamily: 'monospace' }}>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
    //     navigate('/home')
    console.log('user', user);
    }


    const handleregister = async event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        // const agree = event.target.terms.checked
        // if (agree) {
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName: name  });
           alert('Updated profile');
           navigate('/home')
        // }
    }


    return (
        <div>
            <div className='register-form pt-5'>
                <h2 style={{ textAlign: 'center' }, { marginTop: '40px' }, { fontFamily: 'initial' }}>Please Register</h2>

                <form onSubmit={handleregister}>
                    <input type="text" name='name' placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email' required />

                    <input type="password" name="password" id="" placeholder='Password' required />


                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className='mb-3 ' />
                    {/* <label htmlFor="terms" className={agree ? 'ps-2': 'ps-2 text-danger'}>Accept Genius Car Terms anc Conditions.</label> */}
                    <label htmlFor="terms" className={`ps-2 ${agree ? '' : 'text-danger'}`}>Accept Genius Car Terms anc Conditions.</label>

                    <input
                    disabled={!agree}
                        className='bg-dark text-white rounded-2 w-25'
                        type="submit"
                        value="Register" />
                </form>

                <p> Already have an account <Link to='/login' onClick={navigateLogin} className='text-secondary fw-bold text-decoration-none  border-bottom border-dark px-2 pb-1' style={{ fontFamily: 'initial' }}>Please Login</Link></p>

            </div>

            <div className='w-50 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>

        </div >
    );
};

export default Register;