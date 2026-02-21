import React from 'react'

function Home() {
    return (
        <div className='relative pt-24' id='home'>
            <div className="w-full overflow-hidden">
                <img src="/HomeImg.png" className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"/>
            </div>
            <div className='absolute flex flex-col items-center justify-center inset-0 text-white mt-20 md:mt-40'>
                <h1 className='text-xl font-medium md:text-6xl'>Shaping the UAE’s future <br /> with precision & passion</h1>
                <p className='mt-4 font-light'>Bright Hurst Contracting LLC delivers expert interior fit-out, MEP, and civil <br /> works across the UAE with a focus on quality, innovation, and integrity.</p>
                <button className='bg-white text-black p-2 px-5 font-light rounded-3xl md:mt-5'>Get A Quote</button>
            </div>
        </div>
    )
}

export default Home