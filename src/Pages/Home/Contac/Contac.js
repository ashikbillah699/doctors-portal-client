import React from 'react';
import contactbg from '../../../assets/images/appointment.png'

const Contac = () => {
    return (
        <div className='text-center mb-16 mt-36'
            style={{
                background: `url(${contactbg})`
            }}
        >
            <h3 className='text-2xl text-secondary fw-bold pt-16' >Contac Us</h3>
            <h2 className='text-3xl font-light text-white'>Stay connected with us</h2>
            <div className=''>
                <div className=" bg-none  mx-auto max-w-sm ">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control my-3">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <textarea name='message' className="textarea textarea-bordered mb-1" placeholder="Your Message"></textarea>
                    </div>
                </div>
            </div>
            <button className="btn border-none bg-gradient-to-r from-primary to-secondary mb-16">Get Started</button>
        </div>
    );
};

export default Contac;