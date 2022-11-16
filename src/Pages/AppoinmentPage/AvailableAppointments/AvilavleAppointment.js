import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AvailableApointmentOption from './AvailableApointmentOption/AvailableApointmentOption';
import BookAppointment from './AvailableApointmentOption/BookAppointment/BookAppointment';

const AvilavleAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null)

    const date = format(selected, 'PP')

    const { data: options = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

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
                        refetch={refetch}
                    ></BookAppointment>}
            </div>
        </div>
    );
};

export default AvilavleAppointment;