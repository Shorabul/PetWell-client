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
import ForgotPassword from '../pages/ForgotPassword';
import BookServiceForm from '../pages/BookServiceForm';
import UpdateProfile from '../pages/UpdateProfile';
import Error from '../pages/Error';
import UpdateName from '../pages/UpdateName';
import UpdateEmail from '../pages/UpdateEmail';
import UpdateNumber from '../pages/UpdateNumber';
import ProductDetails from '../pages/ProductDetails';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
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
                element: <Services></Services>,
            },
            {
                path: '/profile',
                element: (<PrivateRoute><Profile></Profile></PrivateRoute>),
            },
            {
                path: '/update-profile',
                element: (<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>),
            },
            {
                path: '/update-name',
                element: (<PrivateRoute>
                    <UpdateName></UpdateName>
                </PrivateRoute>),
            },
            {
                path: '/update-email',
                element: (<PrivateRoute>
                    <UpdateEmail></UpdateEmail>
                </PrivateRoute>),
            },
            {
                path: '/update-number',
                element: (<PrivateRoute>
                    <UpdateNumber></UpdateNumber>
                </PrivateRoute>),
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails></ProductDetails>,
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/auth/forgot-password',
                element: <ForgotPassword></ForgotPassword>,
            },
        ]
    },
    {
        path: '/service-details/:id',
        errorElement: <Error></Error>,
        element: <ServiceDetails></ServiceDetails>,
    },
    {
        path: '/book-service/:id',
        errorElement: <Error></Error>,
        element: <PrivateRoute><BookServiceForm></BookServiceForm></PrivateRoute>,
    }, {
        path: '/error',
        element: <Error></Error>,
    }
]);
// console.log("Registered Routes:", router.routes);

export default router;