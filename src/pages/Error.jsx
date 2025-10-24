import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="min-h-screen bg-[#f8faf5] flex flex-col justify-center items-center p-6 text-center">

            {/* Icon */}
            <FaExclamationTriangle className="text-5xl sm:text-6xl md:text-7xl text-green-700 mb-4 sm:mb-6" />

            {/* Error Code */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-2 sm:mb-4">
                404
            </h1>

            {/* Message */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 px-4 sm:px-0">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            {/* Illustration */}
            <img
                src="/error.svg"
                alt="Lost Dog Illustration"
                className="w-60 sm:w-72 md:w-96 mb-4 sm:mb-6"
            />

            {/* Back Home Button */}
            <Link
                to="/"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md transition-all text-sm sm:text-base active:scale-110 ease-in-out"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
