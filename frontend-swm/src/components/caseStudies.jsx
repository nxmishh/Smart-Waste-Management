
import CaseStudy from "./caseStudy";
import SectionTitle from "./sectionTitle";
import AllCaseStudies from "./allCaseStudies";

export default function CaseStudies() {
    return (
        <div id="cs">
            <SectionTitle name="For whom?" tagline="Case studies" />
            <AllCaseStudies />
            <div className="flex flex-wrap justify-center pb-20">
                <CaseStudy name="Recycling" image="recycling_cs.png" />
                <CaseStudy name="Offices" image="offices_cs.png" />
                <CaseStudy name="Facilities" image="shopping_malls_cs.png" />
                <CaseStudy name="Gas Stations" image="gas_stations_cs.png" />
                <CaseStudy name="Hospitals" image="hospitals_cs.png" />
                <CaseStudy name="Retail" image="retail_cs.png" />
                <CaseStudy name="Airports" image="airports_cs.png" />
                <CaseStudy name="Stadiums" image="stadiums_cs.png" />
            </div>
        </div>
    )



}