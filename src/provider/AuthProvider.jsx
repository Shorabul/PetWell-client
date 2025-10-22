import React from 'react';
import { getAuth, } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [tips, setTips] = useState([]);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data)) //.then(setUsers)
            .catch(error => {
                console.log('Failed to load news.json', error);
            })
    }, []);
    useEffect(() => {
        fetch('/tips.json')
            .then(res => res.json())
            .then(data => setTips(data)) //.then(setUsers)
            .catch(error => {
                console.log('Failed to load news.json', error);
            })
    }, []);
    useEffect(() => {
        fetch('/dr.json')
            .then(res => res.json())
            .then(data => setDoctors(data)) //.then(setUsers)
            .catch(error => {
                console.log('Failed to load news.json', error);
            })
    }, []);

    const authData = {
        services,
        tips,
        doctors,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;