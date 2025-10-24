import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import VetCard from './VetCard';

const Vets = () => {
    const { doctors } = useContext(AuthContext);
    return (
        <div className='w-full text-center space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10'>
            <h2 className='text-white/80 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Meet Our Expert Vets</h2>
            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    doctors.map(doctor => <VetCard key={doctor.id} doctor={doctor}></VetCard>)
                }
            </div>
        </div>
    );
};

export default Vets;