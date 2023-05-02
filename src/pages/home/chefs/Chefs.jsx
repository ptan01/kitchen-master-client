import React, { useEffect } from 'react';

const Chefs = ({chef}) => {

    console.log(chef)

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-[300px] h-[300px]' src={chef.chefPicture} alt="chef img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef.chefName}</h2>
                <p>Experience:{chef.experience} Year</p>
                <p>Like :{chef.likes}</p>
                <p>Recipes :{chef.numberOfRecipes}</p>
                <div className="card-actions justify-end">
                    <button className="btn ">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Chefs;