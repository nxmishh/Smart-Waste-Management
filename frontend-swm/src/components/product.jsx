

export default function Product({name, image}){
    return  (
        <div className="box-sizing flex flex-col w-1/4 m-4 border rounded-3xl p-4 bg-white">
            <div className="w-full h-48 rounded-lg bg-black" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
            <p className="text-2xl font-semibold py-6">{name}</p>
            <p className="text-lg text-balance">SmartBin utilizes IoT-enabled smart bins equipped with sensors to monitor waste fill levels, detect types of waste, and optimize collection routes. By providing real-time data and insights, SmartBin ensures efficient waste management operations and reduces unnecessary collection trips, saving time, fuel, and resources.</p>
            <a href="/products" className="text-lg font-semibold bg-emerald-700 w-fit mt-12 mb-2 px-6 py-3 rounded-full text-white">Learn more</a>
        </div>
    )
}