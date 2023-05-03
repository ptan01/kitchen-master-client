import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../privetRoute_Provider/AuthProvider';
import { FaGoogle , FaGithub , FaEye ,FaEyeSlash} from 'react-icons/fa';


const Login = () => {

    const {loginUser ,googleLogin, githubLogin} = useContext(AuthContext)


    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const [show , setShow] = useState(true) 


    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value;
        console.log(email, pass)
        loginUser(email, pass)
        .then(result => {
            console.log(result.user)
            setSuccess('login success fully')
            form.reset()
            navigate('/')

          
        })
        .catch(err=>{
            console.log(err.message)
            setError(err.message)
        })
    }

    const handleGoogle = () =>{
        googleLogin()
        .then(result => {
            setSuccess('google login success fully')
            navigate('/')
        })
        .catch(err => {
            setError(err.message)
        })
    }

    const handleGithub = ()=>{
        githubLogin()
        .then(()=>{
            setSuccess('github login success fully')
            navigate('/')
        })
        .catch(err=>{
            setError(err.message)
        })
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
                            <div className='flex items-center'>
                            <input  type={show ? 'password' : 'text'} name='password' placeholder="password" className="input w-full input-bordered" /><span onClick={()=>setShow(!show)} >
                                {
                                    show ? <FaEye className='text-2xl ml-1'></FaEye> : <FaEyeSlash className='text-2xl ml-1'></FaEyeSlash>
                                }
                            </span>
                            </div>
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
                <div>
                    <button onClick={handleGoogle} className='btn mb-3'> <FaGoogle className='text-2xl mr-2 text-red-700'></FaGoogle> Login with Google</button>
                    <br />
                    <button onClick={handleGithub} className='btn '> <FaGithub className='text-2xl mr-2 text-red-700'></FaGithub> Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;