import React from 'react';

const BlogDetails = ({ blog }) => {
    const {answer, quotation} = blog;
    return (
        <div>
            <div className="card w-full bg-neutral h-full text-neutral-content p-5 bg-[rgba(126,143,254,0.3)] rounded-lg">
                <div className="card-body items-center text-left">
                    <h2 className="card-title text-2xl text-black font-bold mb-4">{quotation}</h2>
                    <p className='text-xl text-[#474747]'>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;