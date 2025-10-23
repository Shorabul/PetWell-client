import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AuthLayout from '../layouts/AuthLayout';
import ServiceDetails from '../pages/ServiceDetails';
import PrivateRoute from '../provider/PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/home',
                Component: Home,
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/signup',
                element: <Signup></Signup>,
            },
        ]
    },
    {
        path: '/service/details',
        element: <PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
    }
]);

export default router;