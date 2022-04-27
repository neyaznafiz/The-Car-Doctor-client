import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
        const url = `https://fierce-crag-21501.herokuapp.com/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input className='mb-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;