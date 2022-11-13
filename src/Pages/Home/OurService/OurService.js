import React from 'react';
import ServiceDescription from './ServiceDescription/ServiceDescription';
import Services from './Services/Services';

const OurService = () => {
    return (
        <div className='max-w-[1398px] mx-auto mt-32'>
            <div className='text-center mb-16'>
                <h3 className='text-2xl text-secondary fw-bold' >Our Services</h3>
                <h2 className='text-3xl text-accent'>Services We Provide</h2>
            </div>
            <Services></Services>
            <ServiceDescription></ServiceDescription>
        </div>
    );
};

export default OurService;