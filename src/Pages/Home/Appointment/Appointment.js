import React from 'react';
import DoctorAppionment from '../../../assets/images/doctor-small.png';
import AppionmentBg from '../../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <section className='mt-44'
            style={{
                background: `url(${AppionmentBg})`
            }}
        >
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={DoctorAppionment} className="-mb-4 -mt-28 lg:w-1/2 rounded-lg shadow-2xl hidden lg:block" />
                    <div>
                        <h1 className="text-1xl text-secondary font-bold">Appoinment</h1>
                        <h1 className="text-3xl text-white font-semibold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn border-none bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;