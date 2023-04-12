import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobItem = ({ item }) => {
    const { logo, title, company_name, fulltime_or_parttime, remoteOrOnsite, location, salary, id } = item;
    return (
        <div className='border-2 p-[30px] flex flex-col justify-center items-center md:grid lg:grid-cols-4 lg:gap-8 w-full mb-10 rounded-lg'>
            <div className='w-[240px] h-[240px] flex justify-center items-center bg-[#F4F4F4] rounded-lg'>
                <img className='w-full h-auto object-cover p-2' src={logo} alt="" />
            </div>
            <div className='md:flex md:justify-between w-full col-span-3'>
                <div>
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
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={`/details/${id}`}>
                        <button className='bg-gradient-to-r from-indigo-400 to-purple-500 lg:flex lg:px-[18px] lg:py-[11px] text-white font-semibold lg:text-2xl px-5 py-3 rounded-lg'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobItem;