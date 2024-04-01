export default function HeroSection() {
    return (
        <div className="shadow-xl flex flex-row box-border mx-auto my-16 mt-32 w-5/6 h-fit bg-lime-100 rounded-3xl" >
            <div className="basis-3/5 p-14 py-24 pb-28">
                <p className="text-lime-600 text-2xl font-bold py-2">SMART WASTE BIN</p>
                <p className="text-gray-900 text-5xl font-bold py-4">Revolutionizing the waste management system</p>
                <p className="text-lg py-2 pb-16">RE-SOURCE Portal is a dynamic platform designed to revolutionize waste management, promote sustainable practices, and facilitate the exchange of recyclable waste between organizations and vendors. Serving as a central hub for stakeholders in the waste management ecosystem.</p>
                <a className="text-white bg-emerald-700 text-lg font-bold rounded-full border-4 border-green-900 p-4 px-8" href="#contact">Contact us</a>
            </div>
            <div className="basis-2/5 bg-black rounded-r-3xl border" style={{ 
                backgroundImage: `url('poster.webp')`,
                backgroundSize: 'cover' }}>
            </div>
        </div>
    );
}
