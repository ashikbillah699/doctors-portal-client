import React from 'react';
import Banner from './Banner/Banner';
import InfoCart from './InfoCarts/InfoCart';
import OurService from './OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCart></InfoCart>
            <OurService></OurService>
        </div>
    );
};

export default Home;