import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Featured = ({ feature }) => {
    const { id, salary, fulltime_or_parttime, location, category_job, remoteOrOnsite, company_name, title, logo } = feature
    return (
        <div className='border rounded-lg p-[40px]'>
            <img className='w-auto h-[60px] mb-8' src={logo} alt="" />
            <h1 className='text-[24px] font-semibold text-[#474747] mb-2'>{title}</h1>
            <p className='text-xl text-[#757575] font-medium mb-3'>{company_name}</p>
            <div className='flex w-auto h-auto'>
                <Link to='/'>
                    <button className='text-purple-500 text-[16px] font-medium border border-purple-500 rounded py-[9px] px-[25px] mr-5'>{remoteOrOnsite}</button>
                </Link>
                <Link to='/'>
                    <button className='text-purple-500 text-[16px] font-medium border border-purple-500 rounded py-[9px] px-[25px]'>{fulltime_or_parttime}</button>
                </Link>
            </div>
            <div className='md:flex mt-3 mb-5'>
                <p className='text-xl text-[#757575] font-medium flex mr-8'>
                    <MapPinIcon className="h-6 w-6 text-gray-700" />  {location}
                </p>
                <p className='text-xl text-[#757575] font-medium flex mt-5 md:mt-0'>
                    <CurrencyDollarIcon className="h-6 w-6 " /> {salary}
                </p>
            </div>
            <Link to={`/details/${id}`}>
                <button className='bg-gradient-to-r from-indigo-400 to-purple-500 lg:flex lg:px-[18px] lg:py-[11px] text-white font-semibold lg:text-2xl px-5 py-3 rounded-lg'>
                View Details
                </button>
            </Link>
        </div>
    );
};


export default Featured;