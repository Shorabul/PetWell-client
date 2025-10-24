import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user, updateUser, setLoading } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Update:', { name, photoURL });
        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setLoading(false);
                // setUser(user);
                // navigate('/');
                toast.success('Profile updated successfully!')
            }).catch((error) => {
                console.log(error);
                toast.error(error.message);
            })
    };

    return (
        <div className="min-h-screen bg-[#f8faf5] flex justify-center items-center p-6">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-[0_0_40px_rgba(97,118,32,0.25)] p-8 space-y-6">

                {/* Back Button */}
                <div className="flex items-center justify-between">
                    <Link
                        to="/profile"
                        className="flex items-center gap-2 text-green-700 hover:underline font-medium"
                    >
                        <FaArrowLeft /> Back to Profile
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center space-y-3">
                    <FaUserCircle className="text-5xl text-green-600 mx-auto" />
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Update Your Profile
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Change your display name or profile picture below.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Display Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="https://example.com/your-photo.jpg"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />
                    </div>

                    {/* Preview */}
                    {photoURL && (
                        <div className="flex justify-center">
                            <img
                                src={photoURL}
                                alt="Preview"
                                className="w-28 h-28 rounded-full object-cover border-4 border-green-600 mt-3"
                            />
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
