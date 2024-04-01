    import React from 'react';
    import SectionTitle from './sectionTitle';

    export default function SensorData({ data }) {
        return (
            <div className=''>
                < SectionTitle name="Smart bin status" tagline='Data from sensors' />

                <div className="flex flex-row flex-wrap">
                    {data.map((item, index) => (
                        <div key={item._id} className=" shadow-lg flex flex-col items-center w-2/5 border mx-auto rounded-3xl py-8 pb-10 m-16">
                            <div className='flex justify-between w-full'>
                                <p className='px-16 text-xl font-semibold'>Smart Bin {index + 1}</p>
                                <p className="px-16 text-lg font-semibold leading-6 mx-12 bg-lime-600 py-3 rounded-full text-white">
                                    {item.location} <span aria-hidden="true"></span>
                                </p>
                            </div>
                            {/* <hr className='w-1/3 border-1.5 border-gray-400 mb-4'></hr> */}
                            <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Dry Waste</p>

                            <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                                <div className="level-fill rounded-full bg-blue-600" style={{ height: '100%', width: `${item.level1}%` }}></div>
                            </div>
                            <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Wet Waste</p>
                            <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                                <div className="level-fill rounded-full bg-rose-600" style={{ height: '100%', width: `${item.level2}%` }}></div>
                            </div>
                            <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Metal Scraps</p>
                            <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                                <div className="level-fill rounded-full bg-orange-600" style={{ height: '100%', width: `${item.level3}%` }}></div>
                            </div>
                            <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Glass Waste</p>
                            <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                                <div className="level-fill rounded-full bg-emerald-600" style={{ height: '100%', width: `${item.level4}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
