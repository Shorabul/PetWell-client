import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
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
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signup',
        element: <Signup></Signup>,
    },
]);

export default router;