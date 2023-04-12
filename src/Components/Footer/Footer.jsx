import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#1A1919]'>
            <div className='my-container lg:py-[130px] md:py-[65px]'>
                <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 lg:gap-[70px] md:gap-[35px] mb-10'>
                    <div className='col-span-2'>
                        <h1 className='text-white font-bold text-3xl mb-5'>PHero-jobs</h1>
                        <p className='text-[16px] text-gray-400 mb-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img className='mb-10 md:mb-0' src='https://i.ibb.co/dJ3j59R/Group-9969.png' alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl text-white font-medium mb-5'>Company</h1>
                        <ul className='text-[16px] text-gray-400'>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Work</Link></li>
                            <li><Link to='/'>Latest News</Link></li>
                            <li><Link to='/'>Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl text-white font-medium mb-5'>Product</h1>
                        <ul className='text-[16px] text-gray-400'>
                            <li><Link to='/'>Prototype</Link></li>
                            <li><Link to='/'>Plans & Pricing</Link></li>
                            <li><Link to='/'>Customers</Link></li>
                            <li><Link to='/'>Integrations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl text-white font-medium mb-5'>Support</h1>
                        <ul className='text-[16px] text-gray-400'>
                            <li><Link to='/'>Help Desk</Link></li>
                            <li><Link to='/'>Sales</Link></li>
                            <li><Link to='/'>Become a Partner</Link></li>
                            <li><Link to='/'>Developers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl text-white font-medium mb-5'>Contact</h1>
                        <ul className='text-[16px] text-gray-400'>
                            <li><Link to='/'>524 Broadway , NYC</Link></li>
                            <li><Link to='/'>+1 777 - 978 - 5570</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='flex md:justify-between flex-col mt-10'>
                    <h1 className='text-[16px] text-gray-400'>@2023 CareerHub. All Rights Reserved</h1>
                    <h3 className='text-[16px] text-gray-400'>Powered by CareerHub</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;