import React, { useContext, useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("You logged out successfully")
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleMenuToggle = () => {
        if (profileToggle) {
            setProfileToggle(false);
        }
        setToggle(!toggle);
    }
    const handleProfileToggle = () => {
        if (toggle) {
            setToggle(false);
        }
        setProfileToggle(!profileToggle);
    }
    const links = <>
        <NavLink to='/' className="">Home</NavLink>
        <NavLink to='/services' className="">Services</NavLink>
        {user && <NavLink to='/profile' className="">Profile</NavLink>}
    </>
    return (
        <nav className="bg-[#fcf9e2] text-[#101921] w-11/12 mx-auto my-6 rounded-[20px]">
            <div className="flex items-center justify-between py-2 px-4 lg:p-4">
                {/* name and logo */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link to='/'>
                        <img className="h-6 md:h-7 lg:h-8 rounded" src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" alt="WarmPaws Logo" />
                    </Link>
                    <Link to='/'>
                        <span className="self-center text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap">WarmPaws</span>
                    </Link>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto">
                    <ul className="flex flex-col gap-8 font-semibold md:flex-row">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-2 relative">
                    {/* Profile and logout button dropdown */}
                    {user ?
                        <>
                            <button onClick={handleProfileToggle} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="user photo" />
                            </button>
                            <div className={`${profileToggle ? 'block' : 'hidden'} z-50 p-2 space-y-4 absolute top-12 right-0 text-sm bg-lime-700 divide-y divide-white rounded-b-lg`}>
                                <div className="flex flex-col gap-2 pb-2 text-white">
                                    <span className="">{user.displayName}</span>
                                    <span className="text-white/60 text-xs">{user.email}</span>
                                </div>
                                <button onClick={handleLogout} className="bg-green-600 hover:bg-green-700 py-2 px-2 rounded-sm text-white">Sign out</button>
                            </div>
                        </>
                        : <div className='text-xs sm:text-sm md:text-base flex justify-between items-center gap-2 md:gap-4'>
                            <Link
                                to="/auth/login"
                                type="button"
                                className="w-full 
                            sm:w-auto
                            focus:outline-none 
                            text-white
                            bg-green-600
                            hover:bg-green-700 
                            focus:ring-2
                            focus:ring-green-600
                            font-medium
                            rounded-md
                            px-3 
                            sm:px-7 
                            py-2.5 
                            sm:py-3  
                            transition-all 
                            duration-200">
                                Login
                            </Link>
                            <Link
                                to="/auth/signup"
                                type="button"
                                className="w-full 
                            sm:w-auto
                            focus:outline-none 
                            text-white
                            bg-green-600
                            hover:bg-green-700 
                            focus:ring-2
                            focus:ring-green-600
                            font-medium
                            rounded-md
                            px-2 
                            sm:px-7 
                            py-2.5 
                            sm:py-3  
                            transition-all 
                            duration-200">
                                Signup
                            </Link>

                        </div>
                    }
                    {/* Dropdown menu bar*/}
                    <button onClick={handleMenuToggle} className="flex items-center justify-center rounded-md md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200" type="button">
                        {toggle ? <RxCross1 size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                    <div className={`${toggle ? 'block' : 'hidden'} z-50 p-4 absolute top-12 right-0 bg-lime-700 rounded-b-lg`}>
                        <div className="flex flex-col gap-4 w-full font-medium text-sm text-white">
                            {links}
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;