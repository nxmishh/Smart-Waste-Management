

export default function SectionTitle({name, tagline}){
    return (
        <div className="py-2 pt-16">
            <hr className="m-auto w-10 border border-emerald-600"></hr>
            <p className="text-center text-lg my-2 text-emerald-600 font-semibold">{name}</p>
            <p className="text-center text-gray-900 text-3xl font-semibold my-3">{tagline}</p>
        </div>
    )
}