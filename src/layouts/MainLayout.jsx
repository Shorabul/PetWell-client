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
        <div className='flex flex-col min-h-screen bg-gradient-to-r from-[#617620] to-[#0f181f]'>
            <Navbar></Navbar>
            <section className="flex-1 py-10">
                {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;