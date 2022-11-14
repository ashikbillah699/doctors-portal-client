import React, { useState } from 'react';
import AppiontmentBanner from './AppointmentBanner/AppiontmentBanner';
import AvilavleAppointment from './AvailableAppointments/AvilavleAppointment';

const AppoinmentPage = () => {

    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppiontmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppiontmentBanner>
            <AvilavleAppointment
                selected={selected}
            ></AvilavleAppointment>
        </div>
    );
};

export default AppoinmentPage;