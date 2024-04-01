

export default function CaseStudyButton({name}){
    return (
        <a href="#" className="text-lg mr-4 bg-white border border-gray-900 px-6 py-3 rounded-full text-gray-900">
            {name} <span aria-hidden="true"></span>
        </a>
    )
}