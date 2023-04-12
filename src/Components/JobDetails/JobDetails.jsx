import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FeatureContext } from '../../App';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utils/FakeDB'
import swal from 'sweetalert';

const JobDetails = () => {
    const features = useContext(FeatureContext)
    const { id } = useParams()
    const jobDetails = features.find(job => job.id == id);

    const handlerAddToCart = id => {
        swal("Good luck!", "Your apply is successful!", "success");
        addToDb(id)
    }

    return (
        <div>
            <div className='flex relative justify-center items-center bg-[rgba(126,143,254,0.08)] py-[130px]'>
                <img className='absolute left-0 bottom-0 hidden md:flex' src="https://i.ibb.co/2kzn5Jj/Vector.png" alt="" />
                <img className='absolute right-0 top-0 hidden md:flex' src="https://i.ibb.co/CnQy2Wf/Vector-1.png" alt="" />
                <h1 className='text-5xl font-bold text-[#1A1919] text-center'>Job Details</h1>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-6 py-[130px] my-container'>
                <div className='lg:col-span-2 mb-10 lg:mb-0'>
                    <h1 className='mb-[24px] text-[16px] text-[#757575]'><span className='font-bold text-black'>Job Description:</span> {jobDetails.description}</h1>
                    <h2 className='mb-[24px] text-[16px] text-[#757575]'><span className='font-bold text-black'>Job Responsibility:</span> {
                        jobDetails.responsibilities.map((response, i) => <p
                            key={i}
                        >
                            {response}
                        </p>)
                    }</h2>
                    <h3 className='text-black font-bold text-[16px] mb-[24px]'>Educational Requirements:</h3>
                    <p className='text-[#757575] mb-[24px]'>{jobDetails.educationalRequirements}</p>
                    <h3 className='text-black font-bold text-[16px] mb-[24px]'>Experiences:</h3>
                    <p className='text-[#757575]'>{jobDetails.experience}</p>
                </div>
                <div>
                    <div className='rounded-lg bg-[#7E90FE] bg-opacity-20 p-[30px]'>
                        <h1 className='text-xl text-black font-bold mb-[24px]'>Job Details</h1>
                        <hr className='bg-[#9873FF]' />
                        <div className='mt-[24px] flex text-xl text-[#757575]'>
                            <CurrencyDollarIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <p><span className='text-black font-semibold'>Salary :</span> {jobDetails.salary} (Per Month)</p>
                        </div>
                        <div className='flex mt-[16px] text-xl text-[#757575]'>
                            <BriefcaseIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <p><span className='text-black font-semibold'>Job Title :</span> {jobDetails.title}</p>
                        </div>
                        <h1 className='mb-[24px] mt-[16px] text-xl text-black font-bold'>Contact Information</h1>
                        <hr className='bg-[#9873FF]' />
                        <div className='mt-[24px] flex text-xl text-[#757575]'>
                            <PhoneIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <p><span className='text-black font-semibold'>Phone :</span> {jobDetails.contactInformation.phone}</p>
                        </div>
                        <div className='flex mt-[16px] text-xl text-[#757575]'>
                            <EnvelopeIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <p><span className='text-black font-semibold'>Email :</span> {jobDetails.contactInformation.email}</p>
                        </div>
                        <div className='flex mt-[16px] text-xl text-[#757575]'>
                            <MapPinIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <p><span className='text-black font-semibold'>Address :</span> {jobDetails.location}</p>
                        </div>
                    </div>
                    <Link to="">
                        <button onClick={()=>handlerAddToCart(jobDetails.id)} className='bg-gradient-to-r from-indigo-400 to-purple-500 lg:py-[19px] text-white font-semibold lg:text-2xl w-full py-3 rounded-lg mt-[24px]'>
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;