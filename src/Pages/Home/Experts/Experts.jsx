import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import expert1 from '../../../Images/Experts/expert-1.jpg'
import expert2 from '../../../Images/Experts/expert-2.jpg'
import expert3 from '../../../Images/Experts/expert-3.jpg'
import expert4 from '../../../Images/Experts/expert-4.jpg'
import expert5 from '../../../Images/Experts/expert-5.jpg'
import expert6 from '../../../Images/Experts/expert-6.png'

const expert = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 2, name: 'Chris Rock', img: expert2},
    {id: 3, name: 'Dwayne Rock', img: expert3},
    {id: 4, name: 'Messy Vai', img: expert4},
    {id: 5, name: 'Ronaldo Bro', img: expert5},
    {id: 6, name: 'Stachy Jhonson', img: expert6},
]

const Experts = () => {


    return (
        <div>
            <h2>Our Experts</h2>
        </div>
    );
};

export default Experts;