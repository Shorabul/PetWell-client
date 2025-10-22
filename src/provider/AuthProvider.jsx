import React from 'react';
import { getAuth, } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data)) //.then(setUsers)
            .catch(error => {
                console.log('Failed to load news.json', error);
            })
    }, []);

    const authData = {
        services,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;