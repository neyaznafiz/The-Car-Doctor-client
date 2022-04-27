import React from 'react';
import google from '../../../Images/Social/google-logo.png'
import facebook from '../../../Images/Social/facebook.png'
import twitter from '../../../Images/Social/twitter.png'
import github from '../../../Images/Social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../Hooks/useToken';

const SocialLogin = () => {


    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    const [signInWithTwitter, userTwitter, loadingTwitter, errorTwitter] = useSignInWithTwitter(auth);

    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

    const[token]=useToken(userGoogle || userFacebook || userTwitter || userGithub)

    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";



    let errorElement
    if (errorGoogle || errorFacebook || errorTwitter || errorGithub) {
        errorElement = <div className='col-7 border border-danger pt-3 mb-3 mx-auto text-bold fw-bold' style={{ fontFamily: 'monospace' }}>
            <p className='text-danger text-center'>Error: {errorGoogle?.message} {errorFacebook.message} {errorTwitter?.message} {errorGithub?.message}</p>
        </div>
    }


    if (loadingGoogle || loadingFacebook || loadingTwitter || loadingGithub) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true })
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

                <button onClick={() => signInWithFacebook()} className='btn btn-dark w-25 d-block py-2 my-2 mx-auto rounded-pill'>
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