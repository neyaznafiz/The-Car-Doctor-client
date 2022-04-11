import React from 'react';

const Footer = () => {

const today =new Date()
const year = today.getFullYear()

    return (
        <footer className='text-center bg-dark text-light py-3 mt-5'>
            {/* year ta dynamic boshaite hobe */}
            <p> <small>Copyright © {year} neyaznafiz</small></p>
        </footer>
    );
};

export default Footer;