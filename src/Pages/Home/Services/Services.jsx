import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className=''>
            <h1 className='services-title'>Our Services: {services.length}</h1>

            <div className='services-container'>

                {
                    services.map(service => <Service
                        kew={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;