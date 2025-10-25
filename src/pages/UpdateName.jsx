import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from "../provider/AuthContext";
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast'
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

const UpdateName = () => {
    const location = useLocation();
    const [title, setTitle] = useState("Mr.");
    const { firstName, lastName } = location.state || {};
    const [first, setFirst] = useState(firstName);
    const [last, setLast] = useState(lastName);
    const { user, updateUser, setLoading } = useContext(AuthContext);
    const photoURL = user.photoURL;
    const navigate = useNavigate();
    const fullName = `${firstName} ${lastName}`;
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = `${first} ${last}`;
        if (fullName === name) {
            toast.error('Please enter new name!');
            return;
        }
        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setLoading(false);
                toast.success('Name updated successfully!')
                navigate("/profile");
            }).catch((error) => {
                setLoading(false);
                console.log(error);
                toast.error(error.message);
            })
    };

    return (
        <div className="min-h-screen flex justify-center items-center text-gray-200">
            <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-[#0f181f] to-[#617620] p-8 rounded-2xl w-full max-w-md shadow-xl space-y-6"
            >
                {/* Back Button */}
                <div className="flex items-center justify-between">
                    <Link
                        to="/profile"
                        className="flex items-center gap-2 text-white/90 focus:text-[#a1c935] hover:text-[#a1c935] font-medium transition-colors"
                    >
                        <FaArrowLeft /> Back to Profile
                    </Link>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Title</h2>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="title"
                                value="Ms."
                                checked={title === "Ms."}
                                onChange={(e) => setTitle(e.target.value)}
                                className="accent-[#7ba304] w-5 h-5"
                            />
                            <span>Ms.</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="title"
                                value="Mr."
                                checked={title === "Mr."}
                                onChange={(e) => setTitle(e.target.value)}
                                className="accent-[#7ba304] w-5 h-5"
                            />
                            <span>Mr.</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm mb-1">First name</label>
                    <input
                        type="text"
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder="Enter first name"
                        className="w-full bg-gradient-to-r to-[#0f181f] from-[#617620] text-gray-100 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-[#7ba304]"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Last name</label>
                    <input
                        type="text"
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        placeholder="Enter last name"
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

export default UpdateName;
