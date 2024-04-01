
import CaseStudyButton from "./caseStudyButton"

export default function Banner({ title, description, buttonText, image }) {
    return (
        <div className="flex flex-row flex-wrap content-center w-5/6 border mx-auto rounded-3xl py-8 pb-10 m-16">
            <div className="basis-1/2 px-8">
                <p className="text-start mx-auto text-3xl font-semibold py-2">{title}</p>
                <p className="text-start mx-auto text-lg text-balance py-4 pb-8">{description}</p>
                <a href="#" className="text-lg font-semibold leading-6 bg-emerald-700 px-6 py-3 rounded-full text-white">
                See video <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="box-sizing basis-1/2 content-center justify-center p-6 aspect-video">
            <iframe  className=" rounded-lg w-full aspect-video" src="https://www.youtube.com/embed/CRSm4kIG5yk" title="Quick compost" frameborder="0" allowfullscreen></iframe>
            </div>
            

        </div>
    )
}