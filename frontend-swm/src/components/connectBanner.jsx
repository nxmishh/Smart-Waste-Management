

export default function ConnectBanner() {
    return (
        <div className="flex flex-col flex-wrap content-center w-5/6 bg-green-900 mx-auto rounded-3xl text-white pb-12 m-16">
            <p className="text-center mx-auto w-2/3 text-4xl font-bold py-2 pt-14">Got questions?</p>
            <p className="text-center mx-auto w-7/9 text-lg py-4 pb-8">We are here to help you. Leave us a message and we'll get back to you with the details as soon as possible.</p>
            <a href="#contact" className="text-center m-auto w-fit font-semibold text-lg bg-white text-green-900 px-10 py-4 rounded-full">
            Get in touch<span aria-hidden="true"></span>
        </a>
        </div>
    )
}