import React from 'react';
import serviceImg from '../../../../assets/images/treatment.png'

const ServiceDescription = () => {
    return (
        <div className="card card-side my-32 ">
            <figure className=" pl-52"><img className='md:max-w-[430px] md:max-h-[576px] rounded-md' src={serviceImg} alt="" /></figure>
            <div className='w-1/2'>
                <div className="card-body pl-24 pr-20 ">
                    <div className='mt-20'>
                        <h2 className="card-title text-accent  fw-bold font-bold text-5xl">Exceptional Dental Care, on Your Terms</h2>
                        <div className='my-5'>
                            <p className='text-sm pr-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        </div>
                        <button className="btn border-none bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDescription;