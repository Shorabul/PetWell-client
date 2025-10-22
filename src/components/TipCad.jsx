import React from 'react';

const TipCad = ({ tip }) => {
    return (
        <li className='w-ful py-5 px-10 bg-lime-700'>
            {tip.tip}
        </li>
    );
};

export default TipCad;