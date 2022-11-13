import React from 'react';
import icon1 from '../../../../assets/images/fluoride.png'
import icon2 from '../../../../assets/images/cavity.png'
import icon3 from '../../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: icon1,
            bgcolor: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            _id: 2,
            name: "Cavity Filling",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: icon2,
            bgcolor: 'bg-gradient-to-r from-accent to-accent'
        }, {
            _id: 3,
            name: "Teeth Whitening",
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: icon3,
            bgcolor: "bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;