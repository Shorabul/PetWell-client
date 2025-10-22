import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PopularServices from '../components/PopularServices';


const Home = () => {

    return (
        <div className='py-10 w-11/12 mx-auto space-y-20'>
            <Hero></Hero>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;