import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'},{marginTop:'40px'}}>Please Register</h2>

            <form>
                <input type="text" name='name' placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;