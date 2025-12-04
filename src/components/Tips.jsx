import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import TipCad from './TipCad';

const Tips = () => {
    const { tips } = useContext(AuthContext);

    return (
        <div className="w-full text-center space-y-10 sm:space-y-7 md:space-y-10 lg:space-y-12 px-4 md:px-8">
            <h2 className="text-white/90 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate__animated animate__fadeInDown">
                Winter Care Tips for Pets
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 animate__animated animate__fadeInUp animate__delay-1s">
                {tips.map((tip, index) => (
                    <TipCad
                        key={tip.id}
                        tip={tip}
                        className={`${tip.id === 5 ? 'col-span-full flex justify-center' : 'col-span-1'}`}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tips;