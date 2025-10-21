import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-lime-700">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">WarmPaws</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://x.com" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.facebook.com" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Download</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://www.apple.com/app-store" className="hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://play.google.com" className="hover:underline">Android</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">© 2025 <a href="https://flowbite.com/">WarmPaws™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="https://www.facebook.com" className="text-gray-400 dark:hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="https://x.com" className="text-gray-400 dark:hover:text-white">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com" className="text-gray-400 dark:hover:text-white">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;