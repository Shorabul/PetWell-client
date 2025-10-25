import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { FaStar, FaEnvelope, FaStore, FaArrowLeft } from "react-icons/fa";
const ServiceDetails = () => {
    const { id } = useParams();
    const { services } = useContext(AuthContext);
    const [service, setService] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fundedService = services.find(singleServices => singleServices.serviceId === parseInt(id));
        setService(fundedService);
    }, [id, services]);
    const {
        serviceId,
        serviceName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category,
    } = service;

    return (
        <div className="min-h-screen bg-[#f8faf5] text-gray-800 flex flex-col">
            {/* Header Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={serviceName}
                    className="w-full h-[60vh] object-cover brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8faf5] via-transparent to-transparent"></div>

                {/* Back Button */}
                <div className="absolute top-5 left-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-green-700 px-4 py-2 rounded-lg shadow-sm font-medium transition"
                    >
                        <FaArrowLeft /> Back
                    </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-10 left-8">
                    <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                        {category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 drop-shadow-lg">
                        {serviceName}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto py-10 px-5 space-y-8">
                {/* Rating + Price */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5">
                    <div className="flex items-center text-yellow-500 text-lg">
                        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="ml-2 text-gray-700 font-semibold">{rating}</span>
                    </div>
                    <span className="text-3xl font-bold text-green-700">${price}</span>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">About This Service</h2>
                    <p className="text-gray-700 leading-relaxed text-base">{description}</p>
                </div>

                {/* Provider Info */}
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-l-4 border-green-600">
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-2 text-gray-800 font-semibold">
                            <FaStore className="text-green-700" /> {providerName}
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 text-sm">
                            <FaEnvelope className="text-green-600" /> {providerEmail}
                        </p>
                    </div>
                    <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">
                        {slotsAvailable} Slots Left
                    </span>
                </div>

                {/* Book Button */}
                {/* <div className="flex justify-center pt-5">
                    <Link
                        to={`/booking/${serviceId}`}
                        className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                    >
                        Book This Service
                    </Link>
                </div> */}
                <div className="flex justify-between items-center pt-5">
                    {/* <Link
                        to="/services"
                        className="text-green-700 font-medium hover:underline flex items-center gap-2"
                    >
                        ← Back to Services
                    </Link> */}

                    <Link
                        state={{ serviceName, providerName }}
                        to={`/book-service/${serviceId}`}
                        className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all"
                    >
                        Book This Service
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;