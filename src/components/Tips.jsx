import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import TipCad from './TipCad';

const Tips = () => {
    const { tips } = useContext(AuthContext);
    return (
        <div className='w-full text-center space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10'>
            <h2 className='text-white/80 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Winter Care Tips for Pets</h2>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-white font-semibold'>
                {tips.map((tip) => <TipCad key={tip.id} tip={tip} className={`${tip.id === 5 ? 'col-span-full flex justify-center' : 'col-span-1'}`}></TipCad>)}
            </div>
        </div>
    );
};

export default Tips;