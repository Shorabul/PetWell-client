import React, { useContext, useState } from 'react';
import { HiOutlineMenu, HiHome } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast'
import { MdMedicalServices, MdContactSupport, MdInfo } from "react-icons/md";
import { FaUserCircle, FaRegHeart } from "react-icons/fa";
import { FiBox } from "react-icons/fi";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const { user, logout, wishlist } = useContext(AuthContext);


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
        // setProfileToggle(prev => !prev);
        // setTimeout(() => setProfileToggle((prev) => !prev), 0);
    }
    const links = <>
        <NavLink to='/' className="flex justify-center items-center gap-1"><HiHome size={20} />Home</NavLink>
        <NavLink to='/services' className="flex justify-center items-center gap-1"><MdMedicalServices size={20} />All Services</NavLink>
        <NavLink to='/products' className="flex justify-center items-center gap-1"><FiBox size={20} />All Products</NavLink>
        <a className="flex justify-center items-center gap-1"><MdContactSupport size={20} />Contact</a>
        <a className="flex justify-center items-center gap-1"><MdInfo size={20} />About us</a>
        {user && <NavLink to='/profile' className="flex justify-center items-center gap-1"><FaUserCircle size={20} />Profile</NavLink>}
    </>
    return (
        <div className="fixed top-0 w-full flex justify-center z-50">
            <nav className={`bg-[#fcf9e2] text-[#101921] w-11/12 
      ${toggle || profileToggle ? 'rounded-l-[20px] rounded-tr-[20px]' : 'rounded-[20px]'} relative`}>

                <div className="flex items-center justify-between py-2 px-4 lg:p-4">
                    {/* name and logo */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link to='/'>
                            <img className="h-6 md:h-7 lg:h-8 rounded" src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" alt="WarmPaws Logo" />
                        </Link>
                        <Link to='/'>
                            <span className="self-center text-lg md:text-2xl lg:text-3xl font-semibold whitespace-nowrap">WarmPaws</span>
                        </Link>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex md:w-auto">
                        <ul className="flex flex-col gap-8 font-semibold md:flex-row">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="relative">
                            <NavLink to="/wishlist">
                                <FaRegHeart className="size-8 md:size-10" />
                            </NavLink>

                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                                    {wishlist.length}
                                </span>
                            )}
                        </div>
                        {/* Profile and logout button dropdown */}
                        {user ? <div
                        >
                            <button
                                onClick={handleProfileToggle}
                                type="button"
                                className="group flex items-center text-sm rounded-full hover:ring-2 cursor-pointer hover:ring-lime-400"
                            >
                                <img
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                    src={user.photoURL}
                                    alt="User photo"
                                />
                            </button>
                        </div>
                            : <div className="flex justify-between items-center gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
                                <Link
                                    to="/auth/login"
                                    className="w-full sm:w-auto text-white font-medium rounded-md 
                                    px-3 sm:px-7 py-2.5 sm:py-3 
                                    bg-gradient-to-r from-[#617620] to-[#0f181f] 
                                    hover:from-[#a1c935] hover:to-[#25313a] 
                                    focus:outline-none focus:ring-2 focus:ring-[#a1c935] 
                                    transition-all duration-200 transform hover:scale-102 text-center"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/auth/signup"
                                    className="w-full sm:w-auto text-white font-medium rounded-md 
                                    px-3 sm:px-7 py-2.5 sm:py-3 
                                    bg-gradient-to-r from-[#617620] to-[#0f181f] 
                                    hover:from-[#a1c935] hover:to-[#25313a] 
                                    focus:outline-none focus:ring-2 focus:ring-[#a1c935] 
                                    transition-all duration-200 transform hover:scale-102 text-center"
                                >
                                    Signup
                                </Link>
                            </div>
                        }

                        {/* Dropdown menu bar*/}
                        <div className="lg:hidden">
                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="flex items-center justify-center rounded-md p-2  focus:outline-none hover:ring-2 hover:ring-gray-200"
                            >
                                {toggle ? <RxCross1 size={24} /> : <HiOutlineMenu size={24} />}
                            </button>
                        </div>

                    </div>
                </div>
                {/* Dropdown menu */}
                {toggle && (<div
                    className={`absolute z-40 right-0 md:top-16 w-48 h-50 bg-gradient-to-r from-[#0f181f] to-[#617620] rounded-b-md shadow-lg flex flex-col justify-end lg:hidden`}>
                    <div className="flex flex-col justify-start items-start gap-4 p-4 text-sm font-medium text-white">
                        {links}
                    </div>
                </div>
                )}
                {/* dropdown profile */}
                {profileToggle && user && (<div
                    className="absolute z-40 right-0 md:top-14 lg:top-18 w-48 h-40 bg-gradient-to-r from-[#0f181f] to-[#617620] text-white rounded-b-md shadow-lg divide-y divide-white/30 flex flex-col justify-end">
                    <div className="px-4 py-3">
                        <Link to='/profile' className="font-medium">{user?.displayName || "Anonymous User name"}</Link>
                        <p className="text-xs text-white/70">{user?.email || "Anonymous User email"}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-green-600 transition rounded-b-md"
                    >
                        Sign out
                    </button>
                </div>
                )}
            </nav>
        </div>

    );
};

export default Navbar;