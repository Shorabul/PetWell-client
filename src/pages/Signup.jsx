import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast'


const Singup = () => {
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const {
        setLoading,
        createUser,
        setUser,
        updateUser,
        googleAuth,
        user
    } = useContext(AuthContext);

    if (user) {
        navigate('/');
    }
    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 6;
        if (!hasUppercase) {
            setPasswordError("Password must include at least one uppercase letter.");
            return;
        } else if (!hasLowercase) {
            setPasswordError("Password must include at least one lowercase letter.");
            return;
        } else if (!hasSpecialChar) {
            setPasswordError("Password must include at least one special character.");
            return;
        } else if (!isLongEnough) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        } else {
            setPasswordError("");
        }
        // createUser(email, password).then((userCredential) => {
        //     const user = userCredential.user;
        //     updateUser({ displayName: name, photoURL: photo })
        //         .then(() => {
        //             setLoading(false);
        //             setUser(user);
        //             navigate('/');
        //             toast.success('Signup successful');
        //         }).catch((error) => {
        //             console.log(error);
        //             toast.error(error.message);
        //         })
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        // })
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setLoading(false);
                        setUser(user);
                        navigate('/');
                        toast.success('Signup successful');
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error(error.message || 'Failed to update user profile.');
                    });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error.code, error.message);

                const errorMessages = {
                    'auth/email-already-in-use':
                        'This email is already registered. Try logging in instead.',
                    'auth/invalid-email':
                        'The email address is not valid. Please check and try again.',
                    'auth/operation-not-allowed':
                        'Email/password accounts are not enabled. Contact support.',
                    'auth/weak-password':
                        'Password is too weak. Use at least 6 characters.',
                    'auth/network-request-failed':
                        'Network error. Please check your connection and try again.',
                    'auth/internal-error':
                        'An internal error occurred. Please try again later.',
                };

                const message =
                    errorMessages[error.code] || error.message || 'Signup failed. Please try again.';
                toast.error(message);
            });

    }
    // const handleAuthGoogle = () => {
    //     googleAuth().then((result) => {
    //         setLoading(false);
    //         const user = result.user;
    //         setUser(user);
    //         navigate(`${location.state ? location.state : '/'}`);
    //         toast.success("Signup successful");
    //     }).catch((error) => {
    //         console.log(error)
    //         toast.error(error.message);
    //     });
    // }
    const handleAuthGoogle = () => {
        setLoading(true);
        googleAuth()
            .then((result) => {
                setLoading(false);
                const user = result.user;
                setUser(user);
                navigate(location.state ? location.state : '/');
                toast.success("Signup successful");
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);

                const errorMessages = {
                    'auth/account-exists-with-different-credential':
                        'An account already exists with the same email but different sign-in credentials.',
                    'auth/auth-domain-config-required':
                        'Authentication domain configuration is missing.',
                    'auth/cancelled-popup-request':
                        'Popup request was cancelled. Please try again.',
                    'auth/operation-not-allowed':
                        'Google sign-in is not enabled. Please contact support.',
                    'auth/popup-blocked':
                        'Popup was blocked by the browser. Please allow popups and try again.',
                    'auth/popup-closed-by-user':
                        'You closed the popup before completing the sign-in.',
                    'auth/unauthorized-domain':
                        'This domain is not authorized for OAuth operations.',
                    'auth/user-disabled':
                        'This user account has been disabled.',
                    'auth/user-not-found':
                        'No user found with these credentials.',
                    'auth/wrong-password':
                        'Incorrect password. Please try again.',
                    'auth/network-request-failed':
                        'Network error. Please check your connection and try again.',
                    'auth/internal-error':
                        'An internal error occurred. Please try again later.',
                };

                const message =
                    errorMessages[error.code] || error.message || 'An unknown error occurred.';
                toast.error(message);
            });
    };

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
                <div className="w-full max-w-lg p-8 rounded shadow-[0px_0px_20px_#617620]">
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 text-center">SignUp</h2>
                    <form onSubmit={handleSignup} className="space-y-4 text-xs sm:text-sm md:text-base">
                        {/* name */}
                        <div>
                            <label className="font-semibold block mb-1" htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Name" className="bg-white text-[#0f181f] w-full p-2 rounded-sm" />
                        </div>
                        {/* photoURL */}
                        <div>
                            <label className="font-semibold block mb-1" htmlFor="photoURL">Photo URL</label>
                            <input type="url" name="photoURL" placeholder="Photo URL" className="bg-white text-[#0f181f] w-full p-2 rounded" />
                        </div>
                        {/* email */}
                        <div>
                            <label className="font-semibold block mb-1" htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" className="bg-white text-[#0f181f] w-full p-2 rounded" />
                        </div>
                        {/* password */}
                        <div className="relative">
                            <label className="font-semibold block mb-1" htmlFor="password">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" placeholder="Password" className="bg-white text-[#0f181f] w-full p-2 rounded" />
                            {/* password show and hide */}
                            {/* <span onClick={() => setShow(!show)} className="text-black absolute top-8 right-4 cursor-pointer">
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span> */}
                            <span
                                onClick={() => setShow(!show)}
                                className="text-black absolute top-1/2 translate-y-1/2 right-4 cursor-pointer transition-all duration-200 ease-in-out"
                            >
                                {show ? (
                                    <FaEye className="transform scale-100 opacity-100 transition-all duration-200 ease-in-out" />
                                ) : (
                                    <FaEyeSlash className="transform scale-90 opacity-80 transition-all duration-200 ease-in-out" />
                                )}
                            </span>

                        </div>
                        {/* show error */}
                        {passwordError &&
                            <p className='text-red-500'>
                                *{passwordError}</p>
                        }
                        {/* signup button */}
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white cursor-pointer w-full py-2 rounded font-medium">Sign up</button>
                    </form>
                    {/* Divider */}
                    <div className="flex items-center justify-center gap-2 my-2">
                        <div className="h-px w-16 bg-white"></div>
                        <span className="text-sm text-green-300">or</span>
                        <div className="h-px w-16 bg-white"></div>
                    </div>
                    <div className='space-y-4'>
                        {/* google */}
                        <button onClick={handleAuthGoogle} className='bg-white text-green-400 font-semibold cursor-pointer rounded w-full py-2 flex justify-center items-center gap-5'>
                            <FcGoogle size={24} />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                    {/* link to singin */}
                    <p className="text-sm text-center mt-4">
                        Have an account? <Link to="/auth/login" className="text-green-300 cursor-pointer hover:underline">Log in</Link>
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

export default Singup;