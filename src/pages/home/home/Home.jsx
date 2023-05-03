import React, { useContext } from 'react';
import Header from '../Header/Header';
import Chefs from '../chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import ChifSpecialties from '../chifSpecilities/ChifSpecialties';
import BestChefs from '../bestChefs/BestChefs';
import { AuthContext } from '../../../privetRoute_Provider/AuthProvider';

const Home = () => {
    const {tanjim} = useContext(AuthContext)
    console.log(tanjim)

    const chefsData = useLoaderData()
    if(!chefsData){
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <Header></Header>
            <h2 className='text-4xl text-center my-20'>Our Best <span className='text-red-700'>Italyn</span> Chef</h2>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 '>
            {
                chefsData.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
            }
            </div>
            <ChifSpecialties></ChifSpecialties>
            <BestChefs></BestChefs>
        </div>
    );
};

export default Home;