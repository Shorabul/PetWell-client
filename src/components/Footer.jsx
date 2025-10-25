import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#617620] to-[#0f181f] text-[#fcf9e2] pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

                    {/* About WarmPaws */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About WarmPaws</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">About</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Brand Center</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Pet Owner Support</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">Discord Server</a></li>
                            <li><a href="https://x.com" className="hover:text-green-400 transition">Twitter</a></li>
                            <li><a href="https://www.facebook.com" className="hover:text-green-400 transition">Facebook</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Legal</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Licensing</a></li>
                            <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Get the App */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Get the App</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://www.apple.com/app-store" className="hover:text-green-400 transition">iOS</a></li>
                            <li><a href="https://play.google.com" className="hover:text-green-400 transition">Android</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#101921]/10 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
                    <p className="font-semibold text-sm sm:text-base">Get Cozy Updates:</p>
                    <div className="flex w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-md text-white/50 focus:outline-none w-full sm:w-64 bg-gradient-to-r from-[#617620] to-[#0f181f]"
                        />
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md font-semibold transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-green-600 pt-6">
                    <p className="text-sm mb-4 md:mb-0">&copy; 2025 WarmPaws™. All Rights Reserved.</p>
                    <div className="flex space-x-5 text-xl">
                        <a href="https://www.facebook.com" className="hover:text-green-400 transition"><FaFacebookF /></a>
                        <a href="https://x.com" className="hover:text-green-400 transition"><FaXTwitter /></a>
                        <a href="https://www.instagram.com" className="hover:text-green-400 transition"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;