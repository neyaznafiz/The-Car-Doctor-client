import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams()

    return (
        <div>
            <h2>this is service detail : {serviceId}</h2>

            <Link to='/checkout'>

                <div className='text-center'>
                <button className='btn btn-dark'> Proceed Checkout</button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;