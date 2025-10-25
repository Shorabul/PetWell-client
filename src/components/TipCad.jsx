import React from 'react';

const TipCad = ({ tip, className, delay = 0 }) => {
    return (
        <div
            style={{ animationDelay: `${delay}s` }}
            className={`bg-[#f2ebb2] text-[#101921] text-left rounded-xl w-full py-5 px-6 sm:px-10 transform transition-transform duration-300 hover:scale-105 shadow-md animate__animated animate__fadeInUp ${className}`}
        >
            {tip.tip}
        </div>
    );
};

export default TipCad;