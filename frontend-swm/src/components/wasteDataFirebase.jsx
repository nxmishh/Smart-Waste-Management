// WasteData.jsx
import React from 'react';
import SectionTitle from './sectionTitle';

export default function WasteDataFirebase({ data }) {
    return (
        <div className="">
            <SectionTitle name="Smart bin status" tagline="Data from sensors" />

            <div className="flex flex-row flex-wrap">
                {Object.keys(data).map((deviceId) => (
                    <div key={deviceId} className="shadow-lg flex flex-col items-center w-2/5 border mx-auto rounded-3xl py-8 pb-10 m-16">
                        <div className="flex justify-between w-full">
                            <p className="px-14 text-xl font-semibold">Smart Bin {deviceId}</p>
                        </div>
                        <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Dry Waste</p>
                        <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                            <div className="level-fill rounded-full bg-blue-600" style={{ height: '100%', width: `${data[deviceId]?.Dry}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        </div>
                        <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Wet Waste</p>
                        <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                            <div className="level-fill rounded-full bg-rose-600" style={{ height: '100%', width: `${data[deviceId]?.Wet}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        </div>
                        <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Metal Scraps</p>
                        <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                            <div className="level-fill rounded-full bg-orange-600" style={{ height: '100%', width: `${data[deviceId]?.Metal}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        </div>
                        <p className='pl-14 text-left w-full mb-1 text-lg font-semibold pt-2'>Glass Waste</p>
                        <div className="level-bar rounded-full" style={{ width: '80%', height: '30px', backgroundColor: '#f0f0f0', marginBottom: '5px' }}>
                            <div className="level-fill rounded-full bg-emerald-600" style={{ height: '100%', width: `${data[deviceId]?.Glass}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
