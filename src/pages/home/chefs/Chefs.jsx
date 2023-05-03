import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chefs = ({chef}) => {


    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure>
                <LazyLoad height={300} ><img className='w-[300px] h-[300px]' src={chef.chefPicture} alt="chef img" /></LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{chef.chefName}</h2>
                <p className='m-0 p-0'>Experience:{chef.experience} Year</p>
                <p className='m-0 p-0'>Like :{chef.likes}</p>
                <p className='m-0 p-0'>Recipes :{chef.numberOfRecipes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipe/${chef.id}`}><button className="btn ">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;