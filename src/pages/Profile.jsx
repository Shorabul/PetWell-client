import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';
import { FaUserEdit, FaUser, FaAt, FaPhoneAlt } from 'react-icons/fa';
import { HiCamera } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { splitName } from '../utility/nameUtils';
import { BsSlash } from "react-icons/bs";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { firstName, lastName } = splitName(user.displayName);
    return (
        <>
            <div className='w-10/12 mx-auto space-y-10 md:space-y-20'>
                <h2 className='text-white/80 font-bold text-left md:text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Personal information</h2>
                <div className='space-y-1 bg-[#1c1c1c] p-5 rounded-2xl text-white/50'>
                    <div className='relative mb-5 flex justify-between'>
                        <img
                            src={user?.photoURL || "https://i.ibb.co/0jTpW8n/default-user.png"}
                            alt={user?.displayName || "User"}
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                        <Link to="/update-profile" className='absolute bottom-0 left-16 sm:left-19 md:left-22 bg-[#0f181f] p-1 rounded-full'><HiCamera /></Link>
                        <div className="flex justify-start items-start gap-3 mt-4 flex-wrap">
                            <span className="bg-[#0f181f] text-white/50 text-sm sm:text-base px-3 sm:px-4 py-1 rounded-full font-medium">
                                Pet Lover 🐾
                            </span>
                        </div>
                    </div>
                    <div className='text-sm md:text-base lg:text-lg flex justify-between items-center gap-3 bg-[#1c1c1c] shadow-[0_0_10px_#617620] rounded-md px-5 py-4 hover:scale-102 transition-all ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-3'>
                            <FaUser className='size-5 lg:size-7' />
                            <div className=''>
                                <h3 className='text-white/90'>Title &#47; Name</h3>
                                <p className=''>{user?.displayName || "Anonymous User name"}</p>
                            </div>
                        </div>
                        <Link
                            type='button'
                            state={{ firstName, lastName }}
                            to='/update-name'
                            className="font-medium py-1.5 px-2 sm:px-3 md:px-4 rounded-sm transition-all duration-300 flex items-center gap-1 text-white bg-[#2a2a2a] hover:bg-[#a1c935] focus:bg-[#c1e340] shadow-[0_0_10px_#617620]">
                            <MdModeEdit />
                            <span className="hidden sm:inline">Edit</span>
                        </Link>

                    </div>
                    <div className='text-sm md:text-base lg:text-lg flex justify-between items-center gap-3 bg-[#1c1c1c] shadow-[0_0_10px_#617620] rounded-md px-5 py-4 hover:scale-102 transition-all ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-3'>
                            <FaAt className='size-5 lg:size-7' />
                            <div className=''>
                                <h3 className='text-white/90'>Email address</h3>
                                <p className=''>{user?.email || "Anonymous User email"}</p>
                            </div>
                        </div>
                        <Link
                            type='button'
                            state={{ email: user?.email }}
                            to='/update-email'
                            className="font-medium py-1.5 px-2 sm:px-3 md:px-4 rounded-sm transition-all duration-300 flex items-center gap-1 text-white bg-[#2a2a2a] hover:bg-[#a1c935] focus:bg-[#c1e340] shadow-[0_0_10px_#617620]">
                            <MdModeEdit />
                            <span className="hidden sm:inline">Edit</span>
                        </Link>
                    </div>
                    <div className='text-sm md:text-base lg:text-lg flex justify-between items-center gap-3 bg-[#1c1c1c] shadow-[0_0_10px_#617620] rounded-md px-5 py-4 hover:scale-102 transition-all ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-3'>
                            <FaPhoneAlt className='size-5 lg:size-7' />
                            <div className=''>
                                <h3 className='text-white/90'>Mobile number</h3>
                                <p className=''>{user?.phoneNumber || "+00000000000"}</p>
                            </div>
                        </div>
                        <Link
                            type='Button'
                            to='/update-number'
                            className="font-medium py-1.5 px-2 sm:px-3 md:px-4 rounded-sm transition-all duration-300 flex items-center gap-1 text-white bg-[#2a2a2a] hover:bg-[#a1c935] focus:bg-[#c1e340] shadow-[0_0_10px_#617620]">
                            <MdModeEdit />
                            <span className="hidden sm:inline">Edit</span>
                        </Link>
                    </div>
                    {/* Update Profile Button */}
                    <div className="pt-6 text-sm md:text-base lg:text-lg">
                        <Link
                            to="/update-profile"
                            className="inline-flex items-center gap-2 bg-[#1c1c1c] focus:bg-[#a1c935] hover:bg-[#a1c935] shadow-[0_0_10px_#617620] text-white font-semibold py-2 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                            <FaUserEdit className="size-5 lg:size-7" />
                            Update Profile
                        </Link>
                    </div>
                    {/* <FaAt size={30} /> */}
                </div>
            </div >
        </>
    );
};

export default Profile;
