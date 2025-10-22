import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ServiceCard from './ServiceCard';

const PopularServices = () => {
    const { services } = useContext(AuthContext);
    const popular = services.filter(service => service.rating >= 4.8);
    return (
        <div className='w-full grid grid-cols-1 gap-10'>
            {
                popular.map(pService => <ServiceCard key={pService.serviceId} pService={pService}></ServiceCard>)
            }
        </div>
    );
};

export default PopularServices;