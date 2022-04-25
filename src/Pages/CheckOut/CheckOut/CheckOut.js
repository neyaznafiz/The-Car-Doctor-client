import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const CheckOut = () => {

    const { serviceId } = useParams()

    const [service] = useServiceDetail(serviceId)

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>

           
        </div>
    );
};

export default CheckOut;