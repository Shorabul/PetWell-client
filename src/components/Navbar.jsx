import React, { useContext, useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const { user, logout } = useContext(AuthContext);
    // const { email } = user;
    // console.log(email);

    const handleMenuToggle = () => {
        if (profileToggle) {
            setProfileToggle(false);
        }
        setToggle(!toggle)
    }
    const handleProfileToggle = () => {
        if (toggle) {
            setToggle(false);
        }
        setProfileToggle(!profileToggle);
    }
    return (
        <nav className="bg-lime-700">
            <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WarmPaws</span>
                </a>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 text-white rounded-sm md:p-0 ">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className="block py-2 px-3 text-white rounded-sm md:p-0 ">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile' className="block py-2 px-3 text-white rounded-sm md:p-0 ">Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                    {/* Profile dropdown */}
                    {user ?
                        <><button onClick={handleProfileToggle} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/kgVb18wv/user-icon.jpg" alt="user photo" />
                        </button>
                            <div className={`${profileToggle ? 'block' : 'hidden'} z-50 absolute top-9 -right-3 my-4 text-base list-none bg-lime-700 divide-y divide-white rounded-lg shadow-s`} id="user-dropdown">
                                <div className="px-4 py-3 flex flex-col">
                                    <span className="text-sm text-white">Shorabul</span>
                                    <span className="text-sm text-gray-300 truncate">{user.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <button onClick={logout} className="px-4 py-2 text-sm text-white">Sign out</button>
                                    </li>
                                </ul>
                            </div></>
                        : < Link to='/login' type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-600 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2">Login</Link>
                    }
                    {/* Dropdown menu bar*/}
                    <button onClick={handleMenuToggle} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                        {toggle ? <RxCross1 size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                    <div className={`${toggle ? 'flex' : 'hidden'} z-50 items-center justify-between w-full  order-1 absolute top-9 right-3`}>
                        <ul className="flex flex-col font-medium p-4 mt-4 rounded-lg bg-lime-700 rtl:space-x-reverse">
                            <li>
                                <NavLink to='/' className="py-2 px-3 text-white rounded-sm" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' className="py-2 px-3 text-white rounded-sm" aria-current="page">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' className="py-2 px-3 text-white rounded-sm" aria-current="page">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;