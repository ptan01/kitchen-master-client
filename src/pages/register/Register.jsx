import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value ;
        const pass = form.password.value ;
        const name =form.name.value ;
        const photo = form.photo.value ;
        console.log(email, pass, name, photo)
        if(pass.length < 6){
            setError('please your password Minimum six characters')
            return
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div>
                    <h2 className='text-4xl my-5'>Please Register</h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <span>Already Have an Account ? Please <Link className='text-red-700' to='/login'>Login</Link></span>
                        </label>
                        <label className="label">
                            <span className='text-red-500'>{error}</span>
                        </label>
                        <label className="label">
                            <span className='text-green-500'>{success}</span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;