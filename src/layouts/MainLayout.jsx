import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const MainLayout = () => {
    const { state } = useNavigation();
    // const isLoading = state === "loading";
    // console.log(state);
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <section className="flex-1">
                {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;