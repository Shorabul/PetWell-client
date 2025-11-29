import React, { useContext, useState } from 'react';
import { HiOutlineMenu, HiHome } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast'
import { MdMedicalServices } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const { user, logout } = useContext(AuthContext);

    // const profileRef = useRef(null);
    // const menuRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             profileRef.current &&
    //             !profileRef.current.contains(event.target)
    //         ) {
    //             setProfileToggle(false);
    //         }

    //         if (
    //             menuRef.current &&
    //             !menuRef.current.contains(event.target)
    //         ) {
    //             setToggle(false);
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);
    //     return () => document.removeEventListener('click', handleClickOutside);
    // }, []);

    // useEffect(() => {
    //     const handleEscape = (e) => {
    //         if (e.key === 'Escape') {
    //             setToggle(false);
    //             setProfileToggle(false);
    //         }
    //     };

    //     document.addEventListener('keydown', handleEscape);
    //     return () => {
    //         document.removeEventListener('keydown', handleEscape);
    //     };
    // }, []);


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
        <NavLink to='/services' className="flex justify-center items-center gap-1"><MdMedicalServices size={20} />Services</NavLink>
        {user && <NavLink to='/profile' className="flex justify-center items-center gap-1"><FaUserCircle size={20} />Profile</NavLink>}
    </>
    return (
        <div className='relative w-11/12 mx-auto'>
            <nav className={`bg-[#fcf9e2] text-[#101921] w-full my-6 relative z-50 ${toggle || profileToggle ? 'rounded-l-[20px] rounded-tr-[20px]' : 'rounded-[20px]'}`}>
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
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto">
                        <ul className="flex flex-col gap-8 font-semibold md:flex-row">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {/* Profile and logout button dropdown */}
                        {user ? <div
                        >
                            <button
                                onClick={handleProfileToggle}
                                type="button"
                                className="group flex items-center text-sm rounded-full hover:outline-none hover:ring-2 cursor-pointer hover:ring-lime-400 relative"
                            >
                                <img
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                    src={user.photoURL}
                                    alt="User photo"
                                />
                                <Link className="absolute top-0 right-10 w-30 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
                                    {user.displayName}
                                </Link>
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
                        {user && <div className='hidden md:block'>
                            <button
                                onClick={handleLogout}
                                className="w-full sm:w-auto text-white font-medium rounded-md 
                                    px-3 sm:px-7 py-2.5 sm:py-3 
                                    bg-gradient-to-r from-[#617620] to-[#0f181f] 
                                    hover:from-[#a1c935] hover:to-[#25313a] 
                                    focus:outline-none focus:ring-2 focus:ring-[#a1c935] 
                                    transition-all duration-200 transform hover:scale-102 text-center"
                            >
                                Sign out
                            </button>
                        </div>
                        }
                        {/* Dropdown menu bar*/}
                        <div className="md:hidden">
                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="flex items-center justify-center rounded-md p-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                {toggle ? <RxCross1 size={24} /> : <HiOutlineMenu size={24} />}
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
            {profileToggle && user && (<div
                className="absolute z-40 right-0 top-10 w-48 h-40 bg-gradient-to-r from-[#0f181f] to-[#617620] text-white rounded-b-md shadow-lg divide-y divide-white/30 flex flex-col justify-end">
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

            {/* Dropdown menu */}
            {toggle && (<div
                className={`absolute z-40 right-0 top-10 w-48 h-40 bg-gradient-to-r from-[#0f181f] to-[#617620] rounded-b-md shadow-lg flex flex-col justify-end md:hidden`}>
                <div className="flex flex-col justify-start items-start gap-4 p-4 text-sm font-medium text-white">
                    {links}
                </div>
            </div>
            )}
        </div>

    );
};

export default Navbar;