import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div>
            <h2>this is view recipe</h2>
        </div>
    );
};

export default ChefRecipe;