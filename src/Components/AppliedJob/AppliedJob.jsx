import React, { useContext, useState } from 'react';
import { getStoredCart } from '../../Utils/FakeDB';
import { FeatureContext } from '../../App';
import JobDetails from '../JobDetails/JobDetails';
import JobItem from './JobItem';

const AppliedJob = () => {
    const features = useContext(FeatureContext)

    const [sortedData, setSortedData] = useState([])
    console.log(sortedData);

    let cart = [];
    const myCartJob = getStoredCart()
    for (const id in myCartJob) {
        const foundJob = features.find(job => job.id == id);
        if (foundJob) {
            cart.push(foundJob);
        }
    }

    const handleSort = (event) => {
        const sortOption = event.target.value;
        if (sortOption === 'remote') {
            const sortedData = [...cart].filter(job => job.remoteOrOnsite === 'Remote');
            setSortedData(sortedData);
        } else if (sortOption === 'onsite') {
            const sortedData = [...cart].filter(job => job.remoteOrOnsite === 'Onsite');
            setSortedData(sortedData);
        } else {
            setSortedData(cart);
        }
    };

    return (
        <div>
            <div className='flex relative justify-center items-center bg-[rgba(126,143,254,0.08)] py-[130px]'>
                <img className='absolute left-0 bottom-0 hidden md:flex' src="https://i.ibb.co/2kzn5Jj/Vector.png" alt="" />
                <img className='absolute right-0 top-0 hidden md:flex' src="https://i.ibb.co/CnQy2Wf/Vector-1.png" alt="" />
                <h1 className='text-5xl font-bold text-[#1A1919] text-center'>Applied Jobs</h1>
            </div>
            <div className='my-container'>
                <div className='w-full h-[100px] flex justify-end'>
                    <select className="select select-secondary w-[150px] h-[65px] max-w-xs border-2 p-3 rounded-lg" onChange={handleSort}>
                        <option value="">Pick Option</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                    </select>
                </div>
                {
                    sortedData.length > 0 ? sortedData.map(item => <JobItem
                        key={item.id}
                        item={item}
                    ></JobItem>) : cart.map(item => <JobItem
                        key={item.id}
                        item={item}
                    ></JobItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;
