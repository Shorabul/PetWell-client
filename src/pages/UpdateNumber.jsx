import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast'
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const UpdateNumber = () => {
    const [number, setNumber] = useState(null);
    const handleSubmit = () => {
        if (!number) {
            toast.error("Please enter a valid number.");
            return;
        }
        toast.success('Number updated successfully!')

    }
    return (
        <div className="w-11/12 mx-auto flex justify-center items-center text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
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
                    <label htmlFor="number" className="block text-sm mb-1">Number</label>
                    <input
                        id='number'
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter your number"
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

export default UpdateNumber;