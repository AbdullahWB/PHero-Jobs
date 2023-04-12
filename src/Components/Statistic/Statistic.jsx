import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const Statistic = [
        { name: 'Abdullah', assignment: 1, mark: 60, mainMark: 60 },
        { name: 'Abdullah', assignment: 2, mark: 59, mainMark: 60 },
        { name: 'Abdullah', assignment: 3, mark: 60, mainMark: 60 },
        { name: 'Abdullah', assignment: 4, mark: 60, mainMark: 60 },
        { name: 'Abdullah', assignment: 5, mark: 60, mainMark: 60 },
        { name: 'Abdullah', assignment: 6, mark: 47, mainMark: 60 },
        { name: 'Abdullah', assignment: 7, mark: 60, mainMark: 60 },
        { name: 'Abdullah', assignment: 8, mark: 60, mainMark: 60 }
    ];

    return (
        <div>
            <div>
                <div className='flex relative justify-center items-center bg-[rgba(126,143,254,0.08)] py-[130px]'>
                    <img className='absolute left-0 bottom-0 hidden md:flex' src='https://i.ibb.co/2kzn5Jj/Vector.png' alt='' />
                    <img className='absolute right-0 top-0 hidden md:flex' src='https://i.ibb.co/CnQy2Wf/Vector-1.png' alt='' />
                    <h1 className='text-5xl font-bold text-[#1A1919] text-center'>My Statistic</h1>
                </div>
                <div className='my-container flex justify-center items-center'>
                    <ResponsiveContainer width='100%' aspect={2 / 1}>
                        <ComposedChart
                            data={Statistic}
                            margin={{
                                top: 20,
                                right: 80,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="assignment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="mainMark" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
