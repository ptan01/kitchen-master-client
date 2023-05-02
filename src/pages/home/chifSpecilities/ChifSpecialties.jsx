import React from 'react';

const ChifSpecialties = () => {
    return (
        <div className='lg:h-[80vh] h-full lg:flex gap-4  justify-center items-center mt-20'>
            <div className=''>
                
                <img className='w-[600px] h-[400px] rounded-lg ' src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h1 className='text-4xl text-center'>Chef <br /> Specialties</h1>
                <div className='flex' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum reiciendis, soluta rem ipsam officiis obcaecati, tempore corrupti aut rerum hic neque repellendus sequi. Repellendus quod cum repellat excepturi quidem!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti architecto nostrum temporibus fuga incidunt ut modi ducimus culpa, dolorem ipsam eligendi consectetur quam error aliquam nisi quasi vel doloremque.</p>
                </div>
            </div>
        </div>
    );
};

export default ChifSpecialties;