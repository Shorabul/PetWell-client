import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router';
import Loading from '../pages/Loading';

const AuthLayout = () => {
    const { state } = useNavigation();
    return (
        <div className='bg-lime-700 min-h-screen relative flex justify-center items-center'>
            {/* name and logo */}
            <div className="flex items-center gap-3 absolute top-5 left-5">
                <Link to='/'>
                    <img className="h-8 rounded" src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" alt="Flowbite Logo" />
                </Link>
                <Link to='/'>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WarmPaws</span>
                </Link>
            </div>
            {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </div>
    );
};

export default AuthLayout;