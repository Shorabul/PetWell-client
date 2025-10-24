import React from 'react';

const VetCard = ({ doctor }) => {
    const { name, specialty, image } = doctor;
    return (
        <div className="bg-[#7A8A35] p-5 w-full gap-5 rounded-t-4xl hover:scale-105 transition ease-in-out">
            <div className='p-5'>
                <img src={image} alt={name} className="w-full h-full rounded-full" />
            </div>
            <div className='flex-1 text-white flex flex-col gap-10'>
                <h3 className="text-sm md:text-base lg:text-lg font-bold">{name}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-300">{specialty}</p>
                {/* <blockquote className="italic text-gray-400">“{quote}”</blockquote> */}
            </div>
        </div>
    );
};

export default VetCard;