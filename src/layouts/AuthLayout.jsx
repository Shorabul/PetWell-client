import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../pages/Loading';

const AuthLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </div>
    );
};

export default AuthLayout;