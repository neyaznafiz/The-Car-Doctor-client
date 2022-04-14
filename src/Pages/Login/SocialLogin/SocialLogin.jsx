import React from 'react';
import google from '../../../Images/Social/google-logo.png'
import facebook from '../../../Images/Social/facebook.png'
import twitter from '../../../Images/Social/twitter.png'
import github from '../../../Images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithTwitter, user3, loading3, error3] = useSignInWithTwitter(auth);

    const navigate = useNavigate()

    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);


    let errorElement
    if (error || error3 || error4) {
        errorElement = <div className='col-7 border border-danger pt-3 mb-3 mx-auto text-bold fw-bold' style={{fontFamily: 'monospace'}}>
            <p className='text-danger text-center'>Error: {error?.message} {error3?.message} {error4?.message}</p>
        </div>
    }


    if (loading || loading3 || loading4) {
        return <Loading></Loading>
    }

    if (user || user3 || user4) {
        navigate('/home')
    }




    return (
        <div>

            <div className='d-flex align-items-center w-50 mx-auto'>

                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>

            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-25 d-block py-2 mx-auto rounded-pill'>
                    <img style={{ width: '28px' }} src={google} alt="" />
                    <span className='px-2 pt-1'>Google Sign In</span>
                </button>

                <button className='btn btn-dark w-25 d-block py-2 my-2 mx-auto rounded-pill'>
                    <img style={{ width: '34px' }} src={facebook} alt="" />
                    <span className='pt-1'> Facebook Sign In</span>
                </button>

                <button onClick={() => signInWithTwitter()} className='btn btn-dark w-25 d-block py-2 mx-auto rounded-pill'>
                    <img style={{ width: '36px' }} src={twitter} alt="" />
                    <span className='px-2 pt-1'>Twitter Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-dark w-25 d-block py-2 my-2 mx-auto rounded-pill'>
                    <img style={{ width: '28px' }} src={github} alt="" />
                    <span className='px-2 pt-1'>Github Sign In</span>
                </button>
            </div>

        </div>

    );
};

export default SocialLogin;