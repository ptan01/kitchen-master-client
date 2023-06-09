import React from 'react';
import Navbar from '../shared/navigation/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;