import React from 'react';

const SocialLogin = () => {
    return (
        <div>

            <div className='d-flex align-items-center'>

                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>

            </div>

            <button className='btn btn-light w-50'> Google Sign In</button>

        </div>

    );
};

export default SocialLogin;