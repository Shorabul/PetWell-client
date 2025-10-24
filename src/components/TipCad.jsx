import React from 'react';

const TipCad = ({ tip, className }) => {
    return (
        <div className={`bg-[#f2ebb2] text-[#101921] text-left rounded-lg w-ful py-5 px-10 hover:scale-105 transition ease-in-out ${className}`}>
            {tip.tip}
        </div>
    );
};

export default TipCad;