import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import InfoCart from './InfoCarts/InfoCart';
import OurService from './OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCart></InfoCart>
            <OurService></OurService>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;