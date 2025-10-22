import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [tips, setTips] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [user, setUser] = useState(null);
    // console.log(user);
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

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const logout = () => {
        return signOut(auth);
    }

    const authData = {
        services,
        tips,
        doctors,
        user,
        setUser,
        createUser,
        logout,
        login,
        updateUser,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;