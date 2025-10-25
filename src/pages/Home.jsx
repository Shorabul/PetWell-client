import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PopularServices from '../components/PopularServices';
import Tips from '../components/Tips';
import Vets from '../components/Vets';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
// import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import Products from '../components/Products';


const Home = () => {
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false); // hide loader after 1 sec
        }, 1000); // 1000 ms = 1 second

        return () => clearTimeout(timer); // cleanup
    }, []);

    if (showLoading) {
        return <Loading className='h-[30vh]' />; // show loader while true
    }

    return (
        <div className='w-11/12 mx-auto space-y-20'>
            <Hero></Hero>
            <div className='w-1/2 mx-auto'>
                <PopularServices></PopularServices>
            </div>
            <Tips></Tips>
            <Vets></Vets>
            <Products></Products>
        </div>
    );
};

export default Home;