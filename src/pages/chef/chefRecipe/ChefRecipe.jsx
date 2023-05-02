import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../chefRecipeCard/RecipeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipe = () => {
    const chef = useLoaderData()
    const [oneClick , setOneClick] = useState(false)

    if(!chef){
        return <progress className="progress w-56"></progress>
    }

    const handleFavorite = () =>{
        toast(`${chef.chefName} added to Favorite`)
        setOneClick(true)
    }
    return (
        <div>
            <div className="hero h-[50vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={chef.chefPicture} className="w-full h-[400px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chef.chefName}</h1>
                        <p className="py-6">{chef.bio}</p>
                        <button onClick={handleFavorite} className='btn btn-primary' disabled={oneClick}>Add To Favorite</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            {
                chef.recipe.map((rsp , i) => <RecipeCard key={i} recipe={rsp}></RecipeCard>)
            }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefRecipe;