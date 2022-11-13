import React from 'react';
const Patient = ({ patient }) => {
    const { name, img, comment, country } = patient;
    return (
        <div className="card  bg-base-100 shadow-xl mt-20 mx-auto">
            <div className="card-body">
                <small>{comment}</small>
                <div className='flex my-8 gap-3'>
                    <img className='w-14 h-14 ' src={img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{name}</h4>
                        <small>{country}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;