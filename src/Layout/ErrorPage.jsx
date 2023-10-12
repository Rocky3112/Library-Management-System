/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
            <img className='h-[300px]' src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
            </div>
            <div className='mt-10 flex items-center justify-center'>
            <h1 className=' text-4xl text-yellow-500 font-semibold'>Page Not Found</h1><br />
            
        </div>
        <div className='flex items-center justify-center'>

        <button className='px-3 py-2 bg-yellow-500 hover:bg-purple-600 text-white rounded-lg mt-10' onClick={handleBack} >Go back</button>
        </div>
        </div>
        
    );
};

export default ErrorPage;