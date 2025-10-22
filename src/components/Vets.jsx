import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import VetCard from './VetCard';

const Vets = () => {
    const { doctors } = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-3xl font-bold'>Meet Our Expert Vets</h1>
            <div className='w-full grid grid-cols-1 gap-5'>
                {
                    doctors.map(doctor => <VetCard key={doctor.id} doctor={doctor}></VetCard>)
                }
            </div>
        </div>
    );
};

export default Vets;