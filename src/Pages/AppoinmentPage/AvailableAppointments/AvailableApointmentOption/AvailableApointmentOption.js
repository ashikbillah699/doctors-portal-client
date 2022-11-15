import React from 'react';

const AvailableApointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl mx-auto px-20 py-4 mb-8">
            <div className="card-body mx-auto">
                <h2 className="card-title mx-auto font-semibold text-secondary">{name}</h2>
                <p className='mx-auto text-sm'>{slots.length > 0 ? slots[0] : 'Not Available Appointment'}</p>
                <p className='mx-auto text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions mx-auto">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(option)} className="btn text-white border-none bg-gradient-to-r from-primary to-secondary uppercase mx-auto" htmlFor="my-modal-3">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableApointmentOption;