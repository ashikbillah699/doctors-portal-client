import { format } from 'date-fns';
import React from 'react';

const AvilavleAppointment = ({ selected }) => {
    return (
        <div>
            <h1 className='text-1xl text-secondary text-center'>Available Appointments on {format(selected, 'PP')}</h1>
        </div>
    );
};

export default AvilavleAppointment;