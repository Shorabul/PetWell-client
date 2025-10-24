import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext); // assuming you store user in context

    return (
        <>
            <div className="min-h-screen bg-[#f8faf5] flex justify-center items-center p-6">
                <div className="bg-white w-full max-w-2xl rounded-3xl shadow-[0_0_40px_rgba(97,118,32,0.25)] overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-700 to-green-500 h-40 relative">
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                            <img
                                src={user?.photoURL || 'https://i.ibb.co/0jTpW8n/default-user.png'}
                                alt={user?.displayName || 'User'}
                                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="pt-20 pb-10 px-6 text-center space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {user?.displayName || 'Anonymous User'}
                        </h2>
                        <p className="text-gray-500 text-sm">{user?.email}</p>

                        <div className="flex justify-center items-center gap-3 mt-4">
                            <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium">
                                Pet Lover 🐾
                            </span>
                        </div>

                        {/* Update Profile Button */}
                        <div className="pt-6">
                            <Link
                                to="/update-profile"
                                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all"
                            >
                                <FaUserEdit className="text-lg" />
                                Update Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
