import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[900px] flex justify-center items-center'>
            <div className='p-5 rounded-xl shadow-xl'>
                <h2 className='text-2xl mb-5 text-center'>Login</h2>
                <form className='' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-96 max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label"><span className="label-text">Passdword</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-96 max-w-xs" />
                        <small className="font-semibold">Forget Passdword?</small>
                    </div>
                    <input className='btn bg-accent w-full mb-2' type="submit" value="Login" />
                    <small className='font-semibold mb-2'>New to Doctors Portal? <Link className='text-secondary font-semibold' to='/'>Create new account</Link></small>
                    <div className="divider">OR</div>
                    <input className='btn bg-white text-accent border-accent w-full mb-2' type="submit" value="CONTINUE WITH GOOGLE" />

                </form>


            </div>
        </div>
    );
};

export default Login;