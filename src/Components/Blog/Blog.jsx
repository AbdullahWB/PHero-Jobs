import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BlogContext } from '../../App';
import BlogDetails from './BlogDetails';

const Blog = () => {
    const blogs = useContext(BlogContext)
    return (
        <div>
            <div className='flex relative justify-center items-center bg-[rgba(126,143,254,0.08)] py-[130px]'>
                <img className='absolute left-0 bottom-0 hidden md:flex' src="https://i.ibb.co/2kzn5Jj/Vector.png" alt="" />
                <img className='absolute right-0 top-0 hidden md:flex' src="https://i.ibb.co/CnQy2Wf/Vector-1.png" alt="" />
                <h1 className='text-5xl font-bold text-[#1A1919] text-center'>Blog</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 py-[130px] my-container'>
                {
                    blogs.map(blog => <BlogDetails
                        key={blog.id}
                        blog={blog}
                    ></BlogDetails>)
                }
            </div>
        </div>
    );
};

export default Blog;