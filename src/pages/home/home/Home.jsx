import React from 'react';
import Header from '../Header/Header';
import Chefs from '../chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefsData = useLoaderData()

    return (
        <div>
            <Header></Header>
            <h2>this is home</h2>
            <div className='grid gap-4 grid-cols-3 '>
            {
                chefsData.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
            }
            </div>
        </div>
    );
};

export default Home;