import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className='p-15 px-15' id='contact'>
            <p>▪ Contact Us</p>
            <h1 className='text-4xl font-medium mt-10'>Connect with Bright Hurst</h1>

            <div className='grid grid-cols-1 sm:grid-cols-3 mt-20 sm:ms-20 '>

                <div className='w-full min-h-[519px] bg-[#01098B] rounded-xl'>
                    <div className='mt-20 ms-10'>
                        <h1 className='text-white text-5xl'>We're Just a <br /> Message Away</h1>

                        <div className='mt-15 text-white '>

                            <div className='flex '>
                                <FontAwesomeIcon className='text-2xl' icon={faPhone} />
                                <div className='ms-10 font-light'>
                                    <p className='font-medium'>Call :</p>
                                    <p>+9791 xxxxxxxxxx</p>
                                    <p>+9791 xxxxxxxxxx</p>
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <FontAwesomeIcon className='text-2xl' icon={faEnvelope} />
                                <div className='ms-10 font-light'>
                                    <p className='font-medium'>Mail :</p>
                                    <p>BrightHurst123@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <FontAwesomeIcon className='text-2xl' icon={faLocationDot} />
                                <div className='ms-10 font-light'>
                                    <p className='font-medium'>Head Office :</p>
                                    <p>Bright Hurst Contracting LLC Office No: 1203, Al Shatha Tower Dubai Internet City, Dubai, UAE P.O. Box: 123456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right col */}
                <div className="lg:col-span-2 ms-20">
                    <form className="space-y-8">

                        {/* name & mail */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="h-12 px-4 rounded-md border border-gray-300" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-12 px-4 rounded-md border border-gray-300 "/>
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-800">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="h-12 px-4 rounded-md border border-gray-300"/>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-800">
                                Message
                            </label>
                            <textarea rows={5} placeholder="Message" className="px-4 py-3 rounded-md border border-gray-300"/>
                        </div>

                        {/* Button */}
                        <button className="bg-[#24286B] text-white px-8 py-3 rounded-3xl sm:ms-130">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact