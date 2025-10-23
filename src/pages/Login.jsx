import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const [show, setShow] = useState(false);
    const { setLoading,
        login,
        setUser,
        googleAuth } = useContext(AuthContext);

    const handleLogin = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password).then((userCredential) => {
            setLoading(false);
            const user = userCredential.user;
            setUser(user);
            navigate(`${location.state ? location.state : '/'}`);
            toast.success("Signin successful");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error(errorMessage);
        });
    }
    const handleSignInWithGoogle = () => {
        googleAuth().then((result) => {
            setLoading(false);
            const user = result.user;
            setUser(user);
            navigate(`${location.state ? location.state : '/'}`);
            toast.success("Signin successful");
        }).catch((error) => {
            console.log(error);
            toast.error(error.message);
        });
    }
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-gray-100 relative">

            <div className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-5">
                <Link to='/'>
                    <img className="h-8 rounded" src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" alt="Flowbite Logo" />
                </Link>
                <Link to='/'>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WarmPaws</span>
                </Link>
            </div>

            {/* Login Form Section */}
            <div className="md:col-span-7 flex items-center justify-center p-6 bg-lime-700 text-white">
                <div className="w-full max-w-lg bg-lime-800 p-8 rounded shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Welcome back</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="font-semibold block mb-1" htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" className="bg-white text-gray-900 w-full p-2 rounded" />
                        </div>
                        <div className="relative">
                            <label className="font-semibold block mb-1" htmlFor="password">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" placeholder="Password" className="bg-white text-gray-900 w-full p-2 rounded" />
                            <span onClick={() => setShow(!show)} className="text-black absolute top-9 right-3 cursor-pointer">
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded">Sign in</button>
                    </form>
                    <div className="flex items-center justify-center gap-2 my-2">
                        <div className="h-px w-16 bg-white"></div>
                        <span className="text-sm text-green-300">or Sign in with</span>
                        <div className="h-px w-16 bg-white"></div>
                    </div>
                    <div className='space-y-4'>
                        {/* google */}
                        <button onClick={handleSignInWithGoogle} className='bg-white text-green-400 font-semibold rounded w-full py-2 flex justify-center items-center gap-5'>
                            <FcGoogle size={24} />
                            <span>Continue with Google</span>
                        </button>
                    </div>

                    <p className="text-sm text-center mt-4">
                        Have an account? <Link to="/auth/signup" className="text-green-300 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:col-span-5 h-screen hidden md:block">
                <img className="w-full h-full object-cover" src="https://i.ibb.co/6JFP9sZ5/login-image.jpg" alt="Login Visual" />
            </div>

        </div>
    );
};
export default Login;