import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ServiceCard from '../components/ServiceCard';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';

const Services = () => {
    const { services } = useContext(AuthContext);

    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showLoading) {
        return <Loading className='h-[30vh]' />;
    }
    return (
        <div className='w-full text-center space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10'>
            <h2 className='text-white/80 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>All Pets Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-15'>
                {
                    services.map(pService => <ServiceCard key={pService.serviceId} pService={pService}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;