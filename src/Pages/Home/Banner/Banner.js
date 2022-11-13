import React from 'react';
import BannerImg from '../../../assets/images/Banner-chair.png';
import BannerBg from '../../../assets/images/Bannerbg.png';

const Banner = () => {
    return (
        <div>
            <div className="max-w-[1398px] mx-auto hero">
                <img src={BannerBg} alt="" />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={BannerImg} className="md:w-1/2 mb-20 rounded-lg shadow-2xl" />
                    <div className='pb-36'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn border-none bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;