import React from 'react';

const ChifSpecialties = () => {
    return (
        <div className='lg:h-[70vh] h-full lg:flex gap-4  justify-center items-center'>
            <div className=''>
                
                <img className='w-[600px] h-[400px] rounded-lg ' src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h1 className='text-4xl text-center'>Chef <span className='text-red-700'>Specialties</span> </h1>
                <div className='flex' >
                    <p>Italian chefs are renowned worldwide for their culinary skills and their ability to create delicious, authentic Italian cuisine. Italian cuisine is known for its use of fresh, high-quality ingredients such as tomatoes, basil, olive oil, and cheeses like mozzarella and Parmesan.</p>
                    <p>Some famous Italian chefs include Massimo Bottura, who runs the three-Michelin-starred restaurant Osteria Francescana in Modena, Italy, and Lidia Bastianich, who is known for her Italian-American cooking and has written several best-selling cookbooks.</p>
                </div>
            </div>
        </div>
    );
};

export default ChifSpecialties;