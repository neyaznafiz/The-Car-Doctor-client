import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <h2>services: {services.length}</h2>
        </div>
    );
};

export default Services;