import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';
import { useEffect } from 'react';
import { useState } from 'react';

const MainLayout = () => {
    // const isLoading = state === "loading";
    // console.log(state);
    const { state } = useNavigation();
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false); // hide loader after 1 sec
        }, 1000); // 1000 ms = 1 second

        return () => clearTimeout(timer); // cleanup
    }, []);

    if (showLoading) {
        return <Loading className="h-screen" />; // show loader while true
    }
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-r from-[#617620] to-[#0f181f]'>
            <Navbar></Navbar>
            <section className="flex-1 py-10 mt-20">
                {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                {/* <Outlet></Outlet> */}
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;