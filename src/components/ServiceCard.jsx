import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa6";


const ServiceCard = ({ pService }) => {
    const { serviceId, serviceName, image, rating, price } = pService
    return (
        <div className="bg-[#7A8A35] w-full max-w-sm mx-auto rounded-xl shadow-md hover:scale-105 transition ease-in-out flex flex-col justify-between hover:bg-[#0f181f50]">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    className="w-full h-[250px] object-cover rounded-t-lg"
                    src={image}
                    alt={serviceName}
                />
                <h5 className="text-left text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold p-2 md:p-4 lg:p-5">{serviceName}</h5>
            </div>
            {/* Text Section */}
            <div className="text-white text-left space-y-1 md:space-y-2 p-2 md:p-4 lg:p-5">

                {/* Rating */}
                <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                        <FaStar className='text-xs sm:text-sm md:text-base' key={index} />
                    ))}
                    <span className="text-xs sm:text-sm md:text-base font-medium ml-1">{rating}</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">${price}</span>
                    <Link to={`/service-details/${serviceId}`} className="bg-white text-[#7A8A35] hover:bg-lime-500 hover:text-white font-semibold rounded-md text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center transition">View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;