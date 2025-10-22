import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-lime-700 text-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" className="bg-white w-full mb-4 p-2 border rounded" />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className="bg-white w-full mb-4 p-2 border rounded" />
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white w-full py-2 rounded">Log in</button>
                </form>
                <p className="text-sm text-center mt-4">
                    Don’t have an account? <Link to="/signup" className="text-green-400">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
