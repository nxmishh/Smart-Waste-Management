import React from 'react';

const Event = ({ title, date, time }) => {
    return (
        <div className="bg-white p-4 rounded">
            <div className='flex'>
                <div className='flex flex-col justify-center pr-4'>
                    <a className='bg-blue-700 text-blue-700 rounded-full w-4 h-4 justify-center'></a>

                </div>
                <div className='flex flex-col justify-center pr-4'>
                    <p href="" className='text-xl font-semibold'>10</p>
                    <p className='text-gray-500 text semi-bold'>APR</p>
                </div>
                <div>
                    <a href="/newsletter" className="text-lg font-medium mb-2">{title}</a>
                    <p className="text-gray-500">{date} - {time}</p>
                </div>
            </div>


        </div>
    );
};

const UpcomingEvents = () => {
    const events = [
        {
            title: "An event featuring expert speakers discussing innovative waste management strategies, recycling initiatives, and sustainable waste solutions.",
            date: "Apr 10, 2024",
            time: "11:30pm Apr 11, 2024, 12:30am (IST)",
        },
        {
            title:
                "A workshop focused on teaching proper etiquette for waste disposal, recycling protocols, and eco-conscious behaviors.",
            date: "Apr 10, 2024",
            time: "11:30pm Apr 19, 2024, 1:00am (IST)",
        },
    ];

    return (
        <div className="upcoming-events w-5/6 mx-auto shadow-lg my-32 p-6 border rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Upcoming events</h2>
            <div className="text-gray-500 mb-4">Time shown in IST +05:30</div>
            {events.map((event) => (
                <Event key={event.title} {...event} />
            ))}
        </div>
    );
};

export default UpcomingEvents;
