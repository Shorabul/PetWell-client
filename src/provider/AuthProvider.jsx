import React from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateEmail,
    updateProfile,
} from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [tips, setTips] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data)) //.then(setUsers)
            .catch(error => {
                console.log('Failed to load services.json', error);
            })
    }, []);
    useEffect(() => {
        fetch('/tips.json')
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(error => {
                console.log('Failed to load tips.json', error);
            })
    }, []);
    useEffect(() => {
        fetch('/dr.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(error => {
                console.log('Failed to load dr.json', error);
            })
    }, []);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.log('Failed to load products.json', error);
            })
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, providerGoogle);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    }
    const updateUserEmail = (newEmail) => {
        setLoading(true);
        return updateEmail(auth.currentUser, newEmail);
    }
    const logout = () => {
        return signOut(auth);
    }
    const userPasswordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // setUser(currentUser);
            // setLoading(false);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

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
        loading,
        setLoading,
        googleAuth,
        userPasswordResetEmail,
        updateUserEmail,
        products,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;