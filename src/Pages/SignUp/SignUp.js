import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useContext(AuthContext)

    const handleLogin = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='h-[900px] flex justify-center items-center'>
            <div className='p-5 rounded-xl shadow-xl'>
                <h2 className='text-2xl mb-5 text-center'>Sign Up</h2>
                <form className='' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name",
                            { required: true })}
                            className="input input-bordered w-96 max-w-xs" />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            { required: true })}
                            className="input input-bordered w-96 max-w-xs" />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label"><span className="label-text">Passdword</span></label>
                        <input type="password" {...register("password",
                            {
                                minLength: { value: 6, message: "please enter 6 caracters" },
                                pattern: { value: /(?=.*[A-Z])(?=)/, message: 'please enter strong password' },
                            })}
                            className="input input-bordered w-96 max-w-xs" required />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-accent w-full mb-2' type="submit" value="Sign Up" required />
                    <small className='font-semibold mb-2'>All ready you haven account <Link className='text-secondary font-semibold' to='/Login'>Login</Link></small>
                    <div className="divider">OR</div>
                    <input className='btn bg-white text-accent border-accent w-full mb-2' type="submit" value="CONTINUE WITH GOOGLE" required />
                </form>
            </div>
        </div>
    );
};

export default SignUp;