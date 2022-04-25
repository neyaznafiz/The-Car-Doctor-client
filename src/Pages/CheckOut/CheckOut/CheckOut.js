import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const CheckOut = () => {

    const { serviceId } = useParams()

    const [service] = useServiceDetail(serviceId)

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>

            <form>
                <input className='w-100 mb-2' type="text" name='name' placeholder='Name' required/>
                <br />
                <input className='w-100 mb-2' type="email" name='email' placeholder='Email' required/>
                <br />
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required/>
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' required/>
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' required/>
                <br />
                <input className='btn btn-dark' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default CheckOut;