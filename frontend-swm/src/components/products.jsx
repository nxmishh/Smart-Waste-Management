import Product from "./product";
import SectionTitle from "./sectionTitle";

export default function Products() {
    return (
        <div className="bg-lime-50 pb-12">
            <SectionTitle name="Products" tagline="Our recycling solutions" />

            <div className="flex flex-wrap justify-center m-2">
                <Product name="Smart Bin" image="ebin.webp" />
                <Product name="Segregated Waste" image="seg_waste.webp" />
                <Product name="Compost" image="compost.jpeg" />
            </div>
        </div>
    )
}