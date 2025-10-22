import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa6";


const ServiceCard = ({ pService }) => {
    const { serviceName, image, rating, price } = pService
    return (
        <div class="bg-lime-700 grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-sm">
            <a href="#">
                <img class="h-full" src={image} alt="product image" />
            </a>
            <div class="py-10 px-10 flex flex-col justify-between text-white">
                <a href="#">
                    <h5 class="text-5xl font-semibold tracking-tight">{serviceName}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 text-yellow-500">
                        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <span class="text-xs font-semibold rounded-sm ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold">${price}</span>
                    <Link to='' class="text-white bg-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;