import Product from "../components/productCard";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Footer from "../components/footer";

export default function Products() {
    const [quantity, setQuantity] = useState(0);
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/checkout');
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center mt-32">
                <Product name="Compost (10kgs)" image="compost.jpeg" desc="Our high-quality compost is perfect for enriching your garden soil, promoting healthy plant growth, and reducing waste." price="999" quantity={quantity} setQuantity={setQuantity}/>
                <Product name="Paper Waste (1 ton)" image="compost.jpeg" desc="Recycled paper waste, one ton in quantity, ideal for eco-friendly packaging, crafting, and sustainable paper production." price="2999" quantity={quantity} setQuantity={setQuantity}/>
                <Product name="Metal Waste (1 ton)" image="compost.jpeg" desc="One ton of recyclable metal waste, ready to be repurposed for manufacturing, construction, and various industrial applications." price="9999" quantity={quantity} setQuantity={setQuantity}/>
                <Product name="Glass Waste (1 ton)" image="compost.jpeg" desc="Recycled glass waste, one ton available, suitable for glassware production, construction materials, and artistic endeavors." price="4999" quantity={quantity} setQuantity={setQuantity}/>
                <Product name="Wet Waste (1 ton)" image="compost.jpeg" desc="Organic wet waste, one ton in quantity, suitable for composting, biogas production, and soil enrichment, helping to reduce landfill waste."  price="1999" quantity={quantity} setQuantity={setQuantity}/>
            </div>
            <div className="text-center mt-4 mb-8">
                <a href="/checkout" className="text-lg p-4 px-8 bg-green-600 rounded-full text-white" onClick={handleButtonClick}>Checkout</a>
            </div>
            <Footer />
        </>
    )
}   
