import React from 'react';

const VetCard = ({ doctor }) => {
    const { name, specialty, image, quote } = doctor;
    return (
        <div className="w-full flex items-center gap-5 bg-lime-700 py-5 px-10">
            <div className='w-50 h-50'>
                <img src={image} alt={name} className="w-full h-full rounded-lg" />
            </div>
            <div className='flex-1 text-white flex flex-col gap-10'>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-gray-300">{specialty}</p>
                <blockquote className="italic text-gray-400">“{quote}”</blockquote>
            </div>
        </div>
    );
};

export default VetCard;