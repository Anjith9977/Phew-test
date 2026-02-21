import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='p-4'>

            <div className='w-full h-full rounded-t-4xl bg-[#24286B] text-white'>

                <div className='grid grid-cols-1  sm:grid-cols-2  md:grid-cols-4 p-16 pt-10'>

                    <div className='mx-10 max-sm:ms-1'>
                        <h1 className='text-6xl font-bold mb-6 font-mono'>LOGO</h1>
                        <p className='text-xl'>Shaping the UAE’s future <br />with precision & passion</p>
                    </div>

                    {/* Linkss */}
                    <div className='space-y-3 ms-24 font-light max-sm:ms-1 max-sm:my-10'>
                        <h2 className='mb-5 font-bold'>Useful Links</h2>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Our Projects</p>
                        <p>Testimonials</p>
                    </div>

                    {/* Support */}
                    <div className='space-y-3 font-light'>
                        <h2 className='mb-5 font-bold'>Support</h2>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                    </div>

                    {/* Find Us */}
                    <div className='font-light max-sm:mt-10'>
                        <h2 className='mb-5 font-bold'>Find Us</h2>
                        <p>Bright Hurst Contracting LLC<br />Office No: 1203, Al Shatha Tower<br />Dubai Internet City, Dubai, UAE <br />P.O. Box: 123456</p>

                        <div className='mt-11'>
                            <h2 className='font-bold'>Social Media Links</h2>

                            <div className='flex gap-5 mt-4 text-xl'>
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                    </div>

                    {/* copyright */}
                    <hr className="border-white mt-10 w-60 md:w-160 lg:w-340" />
                    <h6 className='mt-5 w-full ms-1 font-extralight tracking-wider md:ms-45 md:mt-15'>© Bright Hurst 2025 All Rights Reserved</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer