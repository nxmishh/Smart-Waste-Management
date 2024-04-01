

export default function Form() {
    return (
        <div className="flex flex-row" id="contact">
            <form className="flex flex-col basis-7/12 p-16" method="POST" action="/connect">
                <p className="py-8 text-4xl font-bold">Let's talk! 👋</p>

                <label htmlFor="name" className="py-2 text-xl font-semibold mt-3">Name</label>
                <input required id="name" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="surname" className="py-2 text-xl font-semibold mt-3">Surname</label>
                <input required id="surname" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="emil" className="py-2 text-xl font-semibold mt-3">E-mail</label>
                <input required id="email" type="email" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="job" className="py-2 text-xl font-semibold mt-3">Job title</label>
                <input required id="job" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="company" className="py-2 text-xl font-semibold mt-3">Company</label>
                <input required id="company" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="country" className="py-2 text-xl font-semibold mt-3">Country</label>
                <input required id="country" className="text-xl p-2 text-gray-700  border-b border-gray-500 border-0 focus:border-lime-500 outline-0 "></input>

                <label htmlFor="actions" className="py-2 text-xl font-semibold mt-3">I would like to...</label>
                <select id="actions" onchange="" className="border border-gray-700 rounded-full p-4 pl-8 text-lg pr-10 mt-4">
                    <option value="quote" className="">Get a quote</option>
                    <option value="custom">Build a custom solution with you</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="msg" className="py-2 text-xl font-semibold mt-6">Message</label>
                <textarea id="msg" className="text-xl p-2 text-gray-700 border border-gray-500 rounded-lg h-80 focus:border-lime-500 outline-0 "></textarea>

                <div className="flex justify-end">
                    <button className="bg-emerald-700 w-fit p-4 px-10 rounded-full text-white font-semibold my-6">Send ⭢</button>
                </div>
            </form>
            <div className="grow">
    <div className=" w-full h-full" style={{ 
        backgroundImage: `url('formSidebar.webp')`, 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center' 
    }}></div>
</div>




        </div>

    )
}