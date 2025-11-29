import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

const UpdateEmail = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [newEmail, setNewEmail] = useState(location.state?.email || "");
    const { updateUserEmail, setLoading } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((location.state?.email === newEmail) || !newEmail) {
            toast.error("Please enter a valid new email.");
            return;
        }
        updateUserEmail(newEmail)
            .then(() => {
                setLoading(false);
                toast.success('Email updated successfully!')
                navigate("/profile");
            }).catch((error) => {
                setLoading(false);
                console.log(error);
                if (error.code === "auth/requires-recent-login") {
                    toast.error("Please try again later.");
                } else {
                    toast.error(error.message);
                }
            });
    }
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
            <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-[#0f181f] to-[#617620] p-8 rounded-2xl w-full max-w-md shadow-xl space-y-6"
            >
                {/* Back Button */}
                <div className="flex items-center justify-between ">
                    <Link
                        to="/profile"
                        className="flex items-center gap-2 text-white/90 focus:text-[#a1c935] hover:text-[#a1c935] font-medium transition-colors"
                    >
                        <FaArrowLeft /> Back to Profile
                    </Link>
                </div>
                <div>
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2">This e-mail address is also your login name and the contact address for WarmPaws</h2>
                </div>

                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="Enter new email"
                        className="w-full bg-gradient-to-r to-[#0f181f] from-[#617620] text-gray-100 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-[#7ba304]"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-gradient-to-r to-[#0f181f] from-[#617620]  hover:from-[#a1c935] hover:to-[#25313a] shadow-[0_0_40px_#617620] text-white font-semibold px-6 py-2.5 rounded-md transition-all"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEmail;