import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="h-[94vh] flex items-center justify-center bg-img">
            <div className='text-center'>

                <h1 className='text-5xl lg:text-8xl text-white '>The Kitchen Master</h1>
                <p className='text-2xl text-white my-5 '>Kitchen Master is a Best and professional Chef Website , perfect for Restaurant, Bakery, any food 
                    business and personal chef web sites . <br /> You can find your best chef Here</p>
                <button className='btn my-5'>Bye Chef</button>
            </div>
        </div>
    );
};

export default Header;