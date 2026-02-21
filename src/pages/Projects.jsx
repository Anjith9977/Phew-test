import React from 'react'

function Projects() {
    return (
        <div id='project' className='mb-20'>
            <div className='w-full min-h-[655px] bg-[#24286B] text-white'>
                <p className='p-15 px-15'>▪ Our Projects</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 ps-20'>
                    <div>
                        <h1 className=' text-2xl pe-10 mb-10 sm:text-4xl'>Milestones That Define<br /> Our Journey of Excellence</h1>
                    </div>
                    <div>
                        <p className='font-light max-w-[100%] pe-10 sm:leading-relaxed'>Each completed project reflects our commitment to quality, innovation,<br /> and client satisfaction. These milestones showcase our expertise in<br /> delivering impactful solutions across interior fit-out, MEP, and civil<br /> contracting..</p>
                    </div>
                </div>
            </div>

            {/* Img section */}
            <div className='max-sm: -mt-25 max-sm:gap-5 sm:ms-25 sm:gap-10 sm:-mt-75 grid grid-cols-1 sm:grid-cols-2 '>
                <div>
                    <img src="/cubeStudio.png" alt="cubeStudioImg" />
                </div>
                <div>
                    <img src="/marinaTower.png" alt="marinaTowerImg" />
                </div>
            </div>
        </div>
    )
}

export default Projects