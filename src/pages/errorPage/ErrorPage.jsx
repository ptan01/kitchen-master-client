import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/97041-error-page.json";
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='w-1/3 mx-auto' >
            <h2 className='text-3xl font-bold text-yellow-600 text-center'>{error.data}</h2>
            <h3 className='text-3xl font-semibold text-slate-400 text-center'>{error.status}</h3>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
    );
};

export default ErrorPage;