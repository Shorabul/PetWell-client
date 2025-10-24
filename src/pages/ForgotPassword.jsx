import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useLocation } from 'react-router';

const ForgotPassword = () => {

    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { userPasswordResetEmail } = useContext(AuthContext)
    // const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const handlePasswordReset = (e) => {
        e.preventDefault();
        userPasswordResetEmail(email).then(() => {
            setMessage("Password reset email sent. Check your inbox.");
            setError('');
            setSuccess(true);
            // navigate('/auth/login');
            // window.location.href = "https://mail.google.com/";
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
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                window.open("https://mail.google.com/", "_blank");
            }, 1000); // 1000ms = 1 second

            return () => clearTimeout(timer); // cleanup if component unmounts
        }
    }, [success]);

    return (
        <div className="bg-lime-800 p-6 rounded shadow text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
            <form onSubmit={handlePasswordReset} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-gray-900 w-full p-2 rounded"
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
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