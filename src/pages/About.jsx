import React from 'react'

function About() {
    return (
        <div className='p-15 px-20' id='aboutUs'>
            <p className='font-light'>About Us</p>
            <h1 className='text-4xl font-medium mt-10 max-sm:w-full'>Building Excellence, Delivering Trust</h1>

            {/* Upper content */}
            <div className='grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 font-light'>

                {/* ledt col */}
                <div className='bg-[#F5F5F5] p-5' >
                    <p className=' max-sm:w-full leading-relaxed'>Bright Hurst Contracting LLC is a leading  interior fit-out, electro-mechanical, and civil  contracting company based in the UAE. With  a strong commitment to quality, innovation,  and integrity, we bring client visions to life  through expert craftsmanship and project  excellence. Founded with the vision to redefine industry  standards, we pride ourselves on delivering  complex projects on time, on budget, and  beyond expectations.</p>
                </div>

                {/* img */}
                <div className='max-sm:mt-10'>
                    <img src="/AboutUs.png" alt="constructionimg" />
                </div>

                {/* right col */}
                <div className='grid grid-cols-1 sm:gap-20'>

                    <div className='bg-[#F5F5F5] p-5 '>
                        <h4 className='font-medium'>MISSION</h4>
                        <p className='mt-2 max-w-xs leading-tight'>To deliver premium-quality construction and interior solutions with precision and professionalism.</p>
                    </div>
                    <div className='bg-[#F5F5F5] p-5'>
                        <h4 className='font-medium'>VISION</h4>
                        <p className='mt-2 max-w-xs leading-tight'>To be one of the most trusted and respected contracting companies in<br /> the UAE.</p>
                    </div>

                </div>

            </div>

            {/* Lower Content */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-30'>

                {/* 1st col */}
                <div className='grid grid-cols-1'>
                    <div className='bg-[#24286B] rounded  text-white w-[100%] min-h-[280px] flex items-end'>
                        <h1 className='text-5xl ms-8 mb-5 max-w-xs leading-tight'>Why Choose Us !</h1>
                    </div>

                    <div className='mt-7 bg-[#F5F5F5] w-[100%] min-h-[280px] p-10'>
                        <img src="/experience.png" alt="Expertise icon" />
                        <h4 className='mt-5 mb-4 font-bold'>End-to-End Expertise</h4>
                        <p className='font-light max-w-lg '>From interior fit-outs to MEP and civil works, we offer fully integrated solutions under one roof.</p>
                    </div>

                </div>

                {/* 2nd col */}
                <div className='max-sm:mt-10 ms-3'>
                    <img src="/whyUsImg.png" alt="Construction img" />
                </div>

                {/* 3rd col */}
                <div className='grid grid-cols-1 '>

                    <div className='bg-[#F5F5F5] p-10 w-full min-h-[280px]'>
                        <img src="/consumer-centric.png" alt="consumer" />
                        <h4 className='font-bold mt-5'>Client-Centric Approach</h4>
                        <p className='font-light mt-5'>Every project is customized to align with your vision, goals, and functionality requirements.</p>
                    </div>
                    <div className='bg-[#F5F5F5] p-10 w-full min-h-[280px] mt-5'>
                        <img src="/quality.png" alt="qualityimg" />
                        <h4 className='font-bold mt-5'>Uncompromising Quality</h4>
                        <p className='font-light mt-5'>We use premium materials and proven techniques to ensure durability, safety, and long-term performance.</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default About