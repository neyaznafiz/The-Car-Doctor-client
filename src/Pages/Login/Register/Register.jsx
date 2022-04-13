import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate()


    const navigateLogin = event => {
        navigate('/login')
    }


    const handleregister = event =>{
        event.preventDefault()
        console.log(event.target);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }, { marginTop: '40px' }}>Please Register</h2>

            <form onSubmit={handleregister}>
                <input type="text" name='name' placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="submit" value="Register" />
            </form>

            <p> Already have an account <Link to='/login' onClick={navigateLogin} className='text-secondary fw-bold text-decoration-none'  >Please Login</Link></p>

        </div>
    );
};

export default Register;