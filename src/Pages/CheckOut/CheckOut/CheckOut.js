import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init'

const CheckOut = () => {

    const { serviceId } = useParams()

    const [service] = useServiceDetail(serviceId)

    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar The Greate',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Mohammadpur',
    //     phone: '01711111111'
    // })

    // const handleAddressChange = event => {
    //     console.log(event.target.value)
    //     const { address, ...rest } = user
    //     const newAddress = event.target.value
    //     const newUser = {address: newAddress, ...rest }
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name='name' value={user.displayName} placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" name='email' value={user.email} placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Service' required disabled />
                <br />
                <input /*onChange={handleAddressChange} value={user.address}*/ className='w-100 mb-2' type="text" name='address' placeholder='Address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' /*value={user.phone} */ placeholder='Phone' required />
                <br />
                <input className='btn btn-dark' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default CheckOut;