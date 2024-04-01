import HeroSection from "../components/heroSection"
import CaseStudies from "../components/caseStudies"
import Products from "../components/products"
import ConnectBanner from "../components/connectBanner"
import Banner from "../components/banner"
import Form from "../components/form"
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export default function Homepage() {

    return (
        <main>
            < Navbar />
            < HeroSection />
            < CaseStudies />
            < Products />
            < ConnectBanner />
            < Banner title="Get detailed insights into composting" description="Composting is a natural process where organic materials, such as kitchen scraps, yard waste, and other biodegradable items, decompose into nutrient-rich soil known as compost. It is an environmentally friendly way to recycle organic waste and create a valuable soil amendment that can improve soil structure, fertility, and moisture retention." />
            < Form />
            < Footer />
        </main>
    )
}