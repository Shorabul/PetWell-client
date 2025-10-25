import React from 'react';
import { HashLoader } from "react-spinners";

const Loading = ({ className = '' }) => {
    return (
        <div className={`flex justify-center items-center w-screen transform transition-all duration-1000 ease-in-out hover:scale-150 ${className}`}>
            <HashLoader />
        </div>
    );
};

export default Loading;