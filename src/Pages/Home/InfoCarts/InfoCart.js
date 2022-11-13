import React from 'react';
import icom1 from '../../../assets/icons/clock.svg';
import icom2 from '../../../assets/icons/marker.svg';
import icom3 from '../../../assets/icons/phone.svg';
import InfoCarts from './InfoCarts';


const infoCart = () => {
    const Infodata = [
        {
            _id: 1,
            name: "Opening Hours",
            details: '9am  to  1pm',
            image: icom1,
            bgcolor: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            _id: 2,
            name: "Visit our location",
            details: 'Visit our location',
            image: icom2,
            bgcolor: 'bg-gradient-to-r from-accent to-accent'
        }, {
            _id: 3,
            name: "Contact us now",
            details: '+000 123 456789',
            image: icom3,
            bgcolor: "bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1398px] mx-auto'>
            {
                Infodata.map(data => <InfoCarts key={data._id} data={data}></InfoCarts>)
            }
        </div>
    );
};

export default infoCart;