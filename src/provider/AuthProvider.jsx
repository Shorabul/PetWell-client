import React from 'react';
import { getAuth, } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const authData = {
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;