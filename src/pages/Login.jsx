import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { toast } from 'react-toastify';
import ProfileTost from './profileTost';
import toast from 'react-hot-toast'
const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState("");
    const {
        setLoading,
        login,
        setUser,
        googleAuth,
        user
    } = useContext(AuthContext);
    if (user) {
        navigate('/');
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email);
        const password = e.target.password.value;

        login(email, password)
            .then((userCredential) => {
                setLoading(false);
                const user = userCredential.user;
                setUser(user);
                navigate(`${location.state ? location.state : '/'}`);
                toast.success(`Welcome Back ${user.displayName}`);
                // <ProfileTost user={user} text="Welcome Back"></ProfileTost>
            }).catch((error) => {
                console.log(error);
                console.log(error.code);
                console.log(error.message);
                switch (error.code) {
                    case "auth/user-not-found":
                        setPasswordError("No account found with this email.");
                        break;
                    case "auth/wrong-password":
                        setPasswordError("Incorrect password. Please try again.");
                        break;
                    case "auth/too-many-requests":
                        setPasswordError("Too many failed attempts. Try again later.");
                        break;
                    case "auth/user-disabled":
                        setPasswordError("Your account has been disabled.");
                        break;
                    default:
                        setPasswordError("Login failed. Please try again.");
                }
            });
    }
    const handleSignInWithGoogle = () => {
        googleAuth()
            .then((result) => {
                setLoading(false);
                const user = result.user;
                setUser(user);
                navigate(`${location.state ? location.state : '/'}`);
                // toast.success("Signin successful");
                toast.success(`Welcome Back ${user.displayName}`);
                // <ProfileTost user={user} text="Welcome Back"></ProfileTost>
            }).catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    }
    return (
        <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-12">
            {/* name and logo */}
            {/* <div className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-5">
                <Link to='/'>
                    <img className="h-8 rounded" src="https://i.ibb.co/vCQ80JMx/Warm-Paws-Logo.jpg" alt="Flowbite Logo" />
                </Link>
                <Link to='/'>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WarmPaws</span>
                </Link>
            </div> */}
            {/* Login Form Section */}
            <div className="md:col-span-7 flex items-center justify-center text-white">
                <div className="w-full max-w-lg p-8 rounded-lg shadow-[0px_0px_20px_#617620]">
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm md:text-base">
                        {/* email */}
                        <div>
                            <label className="font-semibold block mb-1" htmlFor="email">Email</label>
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" placeholder="Email" className="bg-white text-[#0f181f] w-full p-2 rounded" />
                        </div>
                        {/* password */}
                        <div className="relative">
                            <label className="font-semibold block mb-1" htmlFor="password">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" placeholder="Password" className="bg-white text-[#0f181f] w-full p-2 rounded" />
                            {/* password show and hide */}
                            <span onClick={() => setShow(!show)} className="text-black absolute top-8 right-4 cursor-pointer">
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {/* checkbox and forgot password */}
                        <div className="flex justify-between items-center">
                            <label htmlFor="remember" className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="remember" name="remember" className="cursor-pointer" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/auth/forgot-password" state={{ email }} className="text-sm text-green-300 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                        {/* show error */}
                        {passwordError &&
                            <p className='text-red-500'>
                                *{passwordError}</p>
                        }
                        {/* signin button */}
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-medium cursor-pointer w-full py-2 rounded">Sign in</button>
                    </form>
                    {/* Divider */}
                    <div className="flex items-center justify-center gap-2 my-2">
                        <div className="h-px w-16 bg-white"></div>
                        <span className="text-sm text-green-300">or Sign in with</span>
                        <div className="h-px w-16 bg-white"></div>
                    </div>
                    <div className='space-y-4'>
                        {/* google */}
                        <button onClick={handleSignInWithGoogle} className='bg-white text-green-600 font-semibold cursor-pointer rounded w-full py-2 flex justify-center items-center gap-5'>
                            <FcGoogle size={24} />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                    {/* link to singin */}
                    <p className="text-sm text-center mt-4">
                        Have an account? <Link to="/auth/signup" className="text-green-300 hover:underline cursor-pointer">Sign up</Link>
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