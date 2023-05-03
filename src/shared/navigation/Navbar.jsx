import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../privetRoute_Provider/AuthProvider';

const Navbar = () => {
    const { user , logOut} = useContext(AuthContext)
    console.log(user)

    const handleLogout = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Blog</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Kitchen Master</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className='flex justify-center'>
                        <button onClick={handleLogout} className='btn mr-3'>Logout</button>
                        <div className="avatar placeholder">
                            <div title={user.displayName ? user.displayName : 'your name not available'} className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src={user.photoURL ? user.photoURL : 'https://static6.depositphotos.com/1008927/570/i/450/depositphotos_5706752-stock-photo-chef-illustration.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                    :
                    <Link className='btn' to='/login'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;