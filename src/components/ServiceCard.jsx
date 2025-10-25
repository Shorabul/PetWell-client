import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { useInView } from "../hooks/useInView";

const ServiceCard = ({ pService, delay = 0 }) => {
    const { serviceId, serviceName, image, rating, price } = pService;
    const [ref, isVisible] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}s` }}
            className={`
        bg-gradient-to-tr from-[#617620] to-[#0f181f] w-full max-w-sm mx-auto rounded-xl shadow-lg 
        hover:scale-105 hover:shadow-xl transition-transform duration-500 transform flex flex-col justify-between
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        >
            {/* Image + Title */}
            <div className="overflow-hidden">
                <img
                    className="w-full h-[250px] object-cover rounded-t-xl transform transition-transform duration-300 hover:scale-105"
                    src={image}
                    alt={serviceName}
                    loading="lazy"
                />
                <h5 className="text-left text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold p-2 md:p-4 lg:p-5">
                    {serviceName}
                </h5>
            </div>

            {/* Info Section */}
            <div className="text-white text-left space-y-2 p-2 md:p-4 lg:p-5">
                {/* Rating */}
                <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
                        <FaStar className="text-xs sm:text-sm md:text-base" key={idx} />
                    ))}
                    <span className="text-xs sm:text-sm md:text-base font-medium ml-1">
                        {rating}
                    </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                        ${price}
                    </span>
                    <Link
                        to={`/service-details/${serviceId}`}
                        className="bg-white text-[#7A8A35] hover:bg-green-600 hover:text-white font-semibold rounded-md text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center transition"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;