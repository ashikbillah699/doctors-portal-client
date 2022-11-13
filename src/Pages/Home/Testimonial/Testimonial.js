import React from 'react';
import Patient from './Patient';
import quote from '../../../assets/icons/quote.svg'
import patient1 from '../../../assets/images/people1.png'
import patient2 from '../../../assets/images/people2.png'
import patient3 from '../../../assets/images/people3.png'


const Testimonial = () => {
    const testmonial = [
        {
            _id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: patient1,
            name: 'Winson Herry',
            country: 'California'
        },
        {
            _id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: patient2,
            name: 'Biddut',
            country: 'California'
        },
        {
            _id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: patient3,
            name: 'Abdullah',
            country: 'California'
        }
    ]
    return (
        <div className='max-w-[1398px] mx-auto mt-32'>
            <div className='flex justify-items-center'>
                <div className='justify-items-center'>
                    <h1 className="text-1xl text-secondary font-bold">Testmonial</h1>
                    <h1 className="text-3xl text-accent font-semibold">What Our Patients Says</h1>
                </div>
                <div className='ml-auto max-w-[192px] max-h-[156px]'>
                    <img className='' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-16'>
                {
                    testmonial.map(patient => <Patient key={patient._id} patient={patient}></Patient>)
                }

            </div>
        </div>
    );
};

export default Testimonial;