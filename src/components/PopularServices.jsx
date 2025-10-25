import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ServiceCard from './ServiceCard';

const PopularServices = () => {
    const { services } = useContext(AuthContext);
    const popular = services.filter(service => service.rating >= 4.8);

    return (
        <div className="w-full text-center space-y-8 px-4 md:px-8">
            <h2 className="text-white/90 font-extrabold text-3xl sm:text-4xl md:text-5xl animate__animated animate__fadeInDown">
                Popular Winter Care Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {popular.map((pService, index) => (
                    <ServiceCard
                        key={pService.serviceId}
                        pService={pService}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularServices;