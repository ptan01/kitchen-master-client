import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../chefRecipeCard/RecipeCard';

const ChefRecipe = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div>
            <div className="hero h-[50vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chef.chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chef.chefName}</h1>
                        <p className="py-6">{chef.bio}</p>
                        <button className="btn btn-primary">Add To Favorite</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            {
                chef.recipe.map((rsp , i) => <RecipeCard key={i} recipe={rsp}></RecipeCard>)
            }
            </div>
        </div>
    );
};

export default ChefRecipe;