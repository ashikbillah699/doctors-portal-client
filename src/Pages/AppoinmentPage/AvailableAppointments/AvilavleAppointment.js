import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableApointmentOption from './AvailableApointmentOption/AvailableApointmentOption';
import BookAppointment from './AvailableApointmentOption/BookAppointment/BookAppointment';

const AvilavleAppointment = ({ selected }) => {
    const [options, setOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])
    return (
        <div className='mt-28 mb-28'>
            <h1 className='text-1xl text-secondary text-center mb-24'>Available Appointments on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    options.map(option => <AvailableApointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AvailableApointmentOption>)
                }
                {
                    treatment &&
                    <BookAppointment
                        selected={selected}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookAppointment>}
            </div>
        </div>
    );
};

export default AvilavleAppointment;