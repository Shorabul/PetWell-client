import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login, setUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Login successful");
                setUser(user);
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-lime-700 text-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" className="bg-white  placeholder:text-gray-500 text-gray-900 w-full mb-4 p-2 border rounded" />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder="Password" className="bg-white  placeholder:text-gray-500 text-gray-900 w-full mb-4 p-2 border rounded" />
                    </div>
                    <button type='submit' className="bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white w-full py-2 rounded">Log in</button>
                </form>
                <p className="text-sm text-center mt-4">
                    Don’t have an account? <Link to="/signup" className="text-green-400">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
