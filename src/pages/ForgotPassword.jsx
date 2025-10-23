import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {

    const emailRef = useRef(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { userPasswordResetEmail } = useContext(AuthContext)
    const navigate = useNavigate();

    const handlePasswordReset = (e) => {
        const email = emailRef.current.value;
        e.preventDefault();
        userPasswordResetEmail(email).then(() => {
            setMessage("Password reset email sent. Check your inbox.");
            setError('');
            navigate('/auth/login')
        }).catch((error) => {
            if (error.code === "auth/user-not-found") {
                setError("No account found with this email.");
            } else {
                setError("Failed to send reset email. Try again.");
            }
            setMessage('');
            console.log(error);
        });
    }

    return (
        <div className="bg-lime-800 p-6 rounded shadow text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
            <form onSubmit={handlePasswordReset} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-gray-900 w-full p-2 rounded"
                    ref={emailRef}
                    required
                />
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white cursor-pointer w-full py-2 rounded">
                    Send Reset Link
                </button>
                {message && <p className="text-green-600 text-sm">{message}</p>}
                {error && <p className="text-red-500 text-sm">*{error}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;