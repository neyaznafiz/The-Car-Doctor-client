import React from 'react';
import sleeping from '../../Images/404/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Mechanic is sleeping</h2>
            <img className='w-100 p-5' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;