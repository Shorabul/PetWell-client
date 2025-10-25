import React from 'react';

const VetCard = ({ doctor, delay = 0 }) => {
    const { name, specialty, image } = doctor;

    return (
        <div
            style={{ animationDelay: `${delay}s` }}
            className="bg-gradient-to-tr from-[#617620] to-[#0f181f] p-4 sm:p-6 rounded-3xl transform transition-transform duration-300 hover:scale-105 shadow-lg animate__animated animate__fadeInUp"
        >
            <div className="flex justify-center mb-4 sm:mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
            </div>
            <div className="text-center text-white flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200">{specialty}</p>
                {/* Optional quote */}
                {/* <blockquote className="italic text-gray-400 mt-2">“{quote}”</blockquote> */}
            </div>
        </div>
    );
};

export default VetCard;


// import React from 'react';

// const VetCard = ({ doctor }) => {
//     const { name, specialty, image } = doctor;
//     return (
//         <div className="bg-[#7A8A35] p-5 w-full gap-5 rounded-t-4xl hover:scale-102 duration-200 transition ease-in-out">
//             <div className='p-5'>
//                 <img src={image} alt={name} className="w-full h-full rounded-full" />
//             </div>
//             <div className='flex-1 text-white flex flex-col gap-10'>
//                 <h3 className="text-sm md:text-base lg:text-lg font-bold">{name}</h3>
//                 <p className="text-xs md:text-sm lg:text-base text-gray-300">{specialty}</p>
//                 {/* <blockquote className="italic text-gray-400">“{quote}”</blockquote> */}
//             </div>
//         </div>
//     );
// };

// export default VetCard;