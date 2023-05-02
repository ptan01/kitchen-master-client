import React from 'react';
import Header from '../Header/Header';
import Chefs from '../chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefsData = useLoaderData()

    return (
        <div>
            <Header></Header>
            <h2 className='text-4xl text-center my-20'>Our Best Chefs</h2>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 '>
            {
                chefsData.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
            }
            </div>
        </div>
    );
};

export default Home;