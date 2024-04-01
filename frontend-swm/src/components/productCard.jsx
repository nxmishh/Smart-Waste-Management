import React, { useState } from 'react';

export default function ProductCards({ name, image, desc, price, quantity, setQuantity }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleAddToCart = () => {
        console.log(`Added ${quantity} ${name} to cart`);
    };
    
    

    return (
        <div className="box-sizing flex flex-col w-1/4 m-4 border rounded-3xl p-4 bg-white">
            <div className="w-full h-48 rounded-lg bg-black" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}></div>

            <div className="flex flex-row justify-between">
                <p className="text-xl font-semibold py-6">{name}</p>
                <p className="text-md font-semibold bg-emerald-700 mt-4 w-fit h-fit px-6 py-2 rounded-full text-white">₹{price}</p>
            </div>

            <p className="text-md font-gray-500 pb-4">
                {showFullDescription ? desc : `${desc.split(' ').slice(0, 15).join(' ')}...`}
                <button onClick={() => setShowFullDescription(!showFullDescription)} className="text-blue-600 hover:underline focus:outline-none ml-2">
                    {showFullDescription ? 'Read Less' : 'Read More'}
                </button>
            </p>

            <div className="flex items-center justify-between">
                <label htmlFor="quantity" className="text-lg">Quantity:</label>
                <input 
                    type="number" 
                    id="quantity" 
                    min="0" 
                    max="25" 
                    className="text-lg rounded-full text-center mx-6 border border-gray-700 w-12" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button 
                    onClick={handleAddToCart} 
                    className="text-md font-semibold bg-orange-700 w-fit mb-2 px-6 py-3 rounded-full text-white"
                >
                    Add to cart
                </button>
            </div>
        </div>
        
    )
}
