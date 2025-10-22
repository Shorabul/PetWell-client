import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import TipCad from './TipCad';

const Tips = () => {
    const { tips } = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-3xl font-bold'>Winter Care Tips for Pets</h1>
            <ul className='w-full grid grid-cols-1 gap-5 text-white font-semibold'>
                {tips.map(tip => <TipCad key={tip.id} tip={tip}></TipCad>)}
            </ul>
        </div>
    );
};

export default Tips;