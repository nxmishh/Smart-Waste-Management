
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="bg-lime-50 flex flex-col mx-auto pb-16">
            <div className="mx-auto p-4 pt-10">
                <img className="w-56" src="logo-2.png" alt="LOGO" />
                <p className="text-center text-gray-700 text-md font-semibold py-4">contact@resource.org.in</p>
            </div>
            <div className="flex flex-row flex-wrap mx-auto">
                <FaFacebook className="text-gray-700 -mt-2" size="2em" style={{ marginInline: '10px' }} />
                <FaTwitter className="text-gray-700 -mt-2" size="2em" style={{ marginInline: '10px' }} />
                <FaInstagram className="text-gray-700 -mt-2" size="2em" style={{ marginInline: '10px' }} />
            </div>
            <hr className='w-2/5 mx-auto my-6 border-gray-400 border-b'></hr>
            <div className="flex flex-col mx-auto">
                <div className='flex flex-row mx-auto'>
                    <a href="#" className='px-2 text-gray-700 py-2'>FAQs</a>
                    <a href="#" className='px-2 text-gray-700 py-2'>Contact</a>
                    <a href="#" className='px-2 text-gray-700 py-2'>Legal</a>

                </div>
                <p className='text-gray-700 text-md text-center'>© 2024 RE-SOURCE. All rights reserved</p>
            </div>
        </div>
    )
}