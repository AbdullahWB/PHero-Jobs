import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { image, name, jobCount } = category;
    return (
        <>
            <Link className='bg-[rgba(126,143,254,0.08)] w-full h-full p-[40px] rounded-lg'>
                <div className='w-[70px] h-[70px] bg-[rgba(126,143,254,0.2)] flex justify-center items-center mb-9 rounded-md'>
                <img src={image} alt="" />
                </div>
                <h1 className='text-3xl font-bold text-[#474747] mb-2'>{name}</h1>
                <p className='text-xl text-[#A3A3A3]'>{jobCount}</p>
            </Link>
        </>
    );
};

export default Category;