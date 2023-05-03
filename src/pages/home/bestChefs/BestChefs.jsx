import React from 'react';

const BestChefs = () => {
    return (
        <div>
            <div className='my-20 text-center'>
                <p className='font-semibold text-red-700'>OUR TEAM OF PROFFESIONALS</p>
                <h2 className='text-4xl'>Best Chefs Of Italy</h2>
            </div>
            <div className='mb-32 mt-20 flex gap-12 justify-center'>


                <div className='w-[300px]'>
                    <div className="avatar online">
                        <div className="w-64 rounded-full">
                            <img className='w-[300px] h-[300px]' src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-700'>Massimo Bottura</h2>
                        <p>He is the chef patron of Osteria Francescana, a three-Michelin-starred restaurant in Modena, Italy. Bottura is known for his innovative approach to Italian cuisine and his use of unexpected ingredients.</p>
                    </div>
                </div>



                <div className='w-[300px]'>
                <div className="avatar online">
                    <div className="w-64 rounded-full">
                        <img className='w-[300px] h-[300px]' src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg" />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-red-700'>Gennaro Contaldo</h2>
                    <p>He is a well-known chef and restaurateur who has been cooking Italian food for over 50 years. Contaldo has worked alongside Jamie Oliver and has written several cookbooks.</p>
                </div>
                </div>


                <div className='w-[300px]'>
                <div className="avatar online">
                    <div className="w-64 rounded-full">
                        <img className='w-[300px] h-[300px]' src="https://media.istockphoto.com/id/137049093/photo/female-chef.jpg?s=612x612&w=0&k=20&c=cn8cwiWC2nncWN8OK9f4kignvbMbETPpHJU1uujNg8c=" />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-red-700'>Lidia Bastianich</h2>
                    <p>She is an Italian-American chef, restaurateur, and cookbook author who is known for her traditional Italian recipes. She has been awarded several James Beard Foundation awards for her work</p>
                </div>
                </div>


                <div className='w-[300px]'>
                <div className="avatar online">
                    <div className="w-64 rounded-full">
                        <img className='w-[300px] h-[300px]' src="https://www.onlychefs.co.uk/blog/wp-content/uploads/2016/03/Tips-for-becoming-a-head-chef.png" />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-red-700'>Massimo Spigaroli</h2>
                    <p>He is a chef and owner of Antica Corte Pallavicina, a restaurant in Parma, Italy. Spigaroli is known for his use of traditional Italian ingredients and for his focus on creating dishes that showcase the flavors of the region.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BestChefs;