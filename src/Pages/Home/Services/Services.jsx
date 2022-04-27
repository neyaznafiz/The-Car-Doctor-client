import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('https://fierce-crag-21501.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div id="services" className=''>
            <h1 className='services-title mt-5'>Our Services: {services.length}</h1>

            <div className='services-container'>

                {
                    services.map(service => <Service
                        kew={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;