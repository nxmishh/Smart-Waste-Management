
import CaseStudyButton from "./caseStudyButton"

export default function AllCaseStudies(){
    return(
        <div className="w-5/6 mx-auto my-8">
            <CaseStudyButton name="All" />
            <CaseStudyButton name="Recycling" />
            <CaseStudyButton name="Offices" />
            <CaseStudyButton name="Facilities" />
            <CaseStudyButton name="Hospitals" />
            <CaseStudyButton name="Retail" />
        </div>
    )
}