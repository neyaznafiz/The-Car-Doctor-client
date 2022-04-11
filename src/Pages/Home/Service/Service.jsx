import React from 'react';

const Service = ({ service }) => {

    const { name, img, description, price } = service

    return (
        <div>
            <img src={img} alt="" />
            <h2>this is service : {name}</h2>
        </div>
    );
};

export default Service;