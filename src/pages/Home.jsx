import React from 'react';
// import Hero from '../components/Hero';
import PopularServices from '../components/PopularServices';
import Tips from '../components/Tips';
import Vets from '../components/Vets';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthContext';
import Products from '../components/Products';
import HeroSlider from '../components/HeroSlider';


const Home = () => {
    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showLoading) {
        return <Loading className='h-[30vh]' />;
    }

    return (
        <div className='w-11/12 mx-auto space-y-20'>
            <HeroSlider></HeroSlider>
            <PopularServices></PopularServices>
            <Tips></Tips>
            <Vets></Vets>
            <Products></Products>
        </div>
    );
};

export default Home;