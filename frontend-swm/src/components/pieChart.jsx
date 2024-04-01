import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import SectionTitle from './sectionTitle';

const PieCh = () => {
    const data = [
        { name: 'Dry waste', waste: 500 },
        { name: 'Wet waste', waste: 600 },
        { name: 'Metal scraps', waste: 200 },
        { name: 'Glass scraps', waste: 300 }
    ];

    const colors = ['#228B22', '#FFD700', '#FF0000', '#87CEEB'];

    return (
        <div className='mt-23'>
            <div className="flex flex-col flex-wrap content-center  bg-lime-100 mx-auto text-white py-6 pb-12 pt-16">
                <SectionTitle name="Waste recycled" tagline="Lifetime waste collected" />

                <PieChart width={600} height={400}>
                    <Pie data={data} dataKey="waste" outerRadius={150} label={false}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Legend layout="horizontal" align="center" verticalAlign="bottom" wrapperStyle={{ marginTop: '20px' }} />
                </PieChart>
            </div>
        </div>
    );
}

export default PieCh;
