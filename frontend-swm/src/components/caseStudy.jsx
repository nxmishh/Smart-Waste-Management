

export default function CaseStudy({ name, image }) {
    return (
        <div className="flex flex-col justify-end w-64 h-80 rounded-3xl m-4 bg-cover" style={{ backgroundImage: `url(${image})` }} >
            <a href="/" className="w-fit px-4 py-2 font-semibold text-xl text-gray-900 bg-lime-200 rounded-full m-3">{name}</a>
        </div>
    )
}