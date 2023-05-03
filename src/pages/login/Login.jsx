import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value;
        console.log(email, pass)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className='my-5'>
                    <h2 className='text-4xl'>Please Login </h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <span>New in Kitchen Master Please <Link className='text-red-700' to='/register'>Register</Link></span>
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

export default Login;