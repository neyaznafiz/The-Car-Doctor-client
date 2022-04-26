import React from 'react'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../Firebase/firebase.init'
import Loading from '../../../Shared/Loading/Loading'
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    let location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please verify your email address</h5>

            <button 
            className='btn btn-dark'
            onClick={async () => { 
                await sendEmailVerification();
                toast('Sent email');
            }} >
               Send verification email again 
            </button>

        </div>
    }

    return children
}


export default RequireAuth;