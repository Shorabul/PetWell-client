import React, { useState } from "react";
import { useNavigate } from "react-router";
// import { toast } from 'react-toastify';
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from 'react-router';
import toast from 'react-hot-toast'

const BookServiceForm = () => {
    const location = useLocation();

    const { serviceName, providerName } = location.state || {};
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            toast.error("Please fill out all fields.");
            return;
        }

        toast.success(`🎉 Booking confirmed for ${serviceName}!`);
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="bg-[#f8faf5] rounded-lg w-screen h-screen flex flex-col justify-center items-center">
            {/* Back Button */}
            <div className="absolute top-5 left-5">
                <button
                    onClick={() => navigate(-1)}
                    className="text-sm md:text-base flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-green-700 px-4 py-2 rounded-lg shadow-sm font-medium transition"
                >
                    <FaArrowLeft className="" /> Back
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 w-lg md:w-xl lg:w-2xl bg-white/50 rounded-3xl shadow-[0_0_35px_rgba(97,118,32,0.15)] p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Book Service
                </h2>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-lg transition-all"
                >
                    Book Now
                </button>
            </form>
            <div className="mt-5 text-center text-sm text-gray-500">

                <p>
                    Booking for:{" "}
                    <span className="font-semibold text-green-700">{serviceName}</span>
                </p>
                <p>
                    Provider:{" "}
                    <span className="font-medium text-gray-700">{providerName}</span>
                </p>
            </div>
        </div>
    );
};

export default BookServiceForm;