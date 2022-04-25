import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetail = () => {

    const { serviceId } = useParams()

   const [service]= useServiceDetail(serviceId)

    return (
        <div>
            <h2>You are about to book: {service.name}</h2>

            <Link to={`/checkout/${serviceId}`}>

                <div className='text-center'>
                    <button className='btn btn-dark'> Proceed Checkout</button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;