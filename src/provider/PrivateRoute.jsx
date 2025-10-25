import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from '../pages/Loading';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <Loading></Loading>;
    } else if (user) {
        return children;
    } else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    }
};

export default PrivateRoute;