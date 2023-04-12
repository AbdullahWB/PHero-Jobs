import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import hiringPt from '../../assets/103199-hiring-pt-2.json'
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import { CategoriesContext, FeatureContext } from '../../App';

const Home = () => {
    const categories = useContext(CategoriesContext)
    const featureData = useContext(FeatureContext)
    // console.log(featureData);
    const [showAll, setShowAll] = useState(false)
    const dataShowAll = () => {
        setShowAll(true);
    }
    return (
        <div>
            <div className='bg-[rgba(126,143,254,0.08)]'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[70px] my-container'>
                    <div>
                        <h1 className='md:text-[80px] text-5xl mb-6 text-[#1A1919] font-bold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
                        <p className='text-xl font-medium text-[#757575] mb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link to='/'>
                            <button className='bg-gradient-to-r from-indigo-400 to-purple-500 lg:flex hidden lg:px-7 lg:py-5 text-white lg:font-bold lg:text-2xl px-5 py-3 rounded-lg'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                    <div className='relative'>
                        <div className='w-full h-full'>
                            <Lottie animationData={hiringPt} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-container mt-[130px]'>
                <h1 className='text-5xl font-bold text-[#1A1919] text-center'>Job Category List</h1>
                <p className='font-medium text-[16px] text-center mt-3 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 mt-8 gap-y-10'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
            <div className='my-container mt-[130px]'>
            <h1 className='text-5xl font-bold text-[#1A1919] text-center'>Featured Jobs</h1>
                <p className='font-medium text-[16px] text-center mt-3 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:gap-6 mt-8 gap-y-10'>
                    {
                        featureData.slice(0, showAll ? 12 : 4).map(feature => <Featured
                        key={feature.id}
                        feature={feature}
                    ></Featured>)
                    }
                </div>
                <div className='w-full h-full flex justify-center mb-[120px]'>
                    {
                        !showAll && (<button onClick={dataShowAll} className="bg-gradient-to-r from-indigo-400 to-purple-500 lg:px-[18px] lg:py-[11px] text-white font-semibold lg:text-2xl px-5 py-3 rounded-lg mt-10">See All Jobs</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;