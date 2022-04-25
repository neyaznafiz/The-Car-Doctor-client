import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const CheckOut = () => {

    const { serviceId } = useParams()

    const [service] = useServiceDetail(serviceId)

    const [user, setUser] = useState({
        name: 'Akbar The Greate',
        email: 'akbar@momo.taj',
        address: 'Tajmohol Road Mohammadpur',
        phone: '01711111111'
    })

    const handleAddressChange = event => {
        console.log(event.target.value)
        const { address, ...rest } = user
        const newAddress = event.target.value
        const newUser = {address: newAddress, ...rest }
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>

            <form>
                <input className='w-100 mb-2' type="text" name='name' value={user.name} placeholder='Name' required />
                <br />
                <input className='w-100 mb-2' type="email" name='email' value={user.email} placeholder='Email' required />
                <br />
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required />
                <br />
                <input onChange={handleAddressChange} className='w-100 mb-2' type="text" name='address' value={user.address} placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' value={user.phone} placeholder='Phone' required />
                <br />
                <input className='btn btn-dark' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default CheckOut;