import React from 'react';
import Rating from 'react-rating';
import { FaRegStar , FaStar } from 'react-icons/fa';


const RecipeCard = ({ recipe }) => {
    
    const { recipeName, rating, ingredients, cookingMethod } = recipe



    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                {
                    ingredients.slice(0, 5).map((ingre, i) => <li key={i}>{ingre}</li>)
                }
                <h1 className='text-xl'>Cooking Method: </h1>
                {
                    cookingMethod.map((cm, idx) => <p key={idx}>{cm}</p>)
                }
                <div className="card-actions justify-between">
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <button className="btn btn-primary">Try Now</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;