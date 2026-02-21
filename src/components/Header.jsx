import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>

            <nav className='flex justify-between p-7 fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <div>
                    <h1 className='text-3xl font-stretch-expanded font-bold text-[#24286B]'>LOGO</h1>
                </div>

                <div className='flex gap-7 px-8 font-light max-md:hidden'>
                    <a href='#home' className='hover:text-[#24286B] cursor-pointer hover:underline'>HOME</a>
                    <a href='#aboutUs' className='hover:text-[#24286B] cursor-pointer hover:underline'>ABOUT US</a>
                    <h2 className='hover:text-[#24286B] cursor-pointer hover:underline'>OUR SERVICES</h2>
                    <a href='#project' className='hover:text-[#24286B] cursor-pointer hover:underline'>OUR PROJECTS</a>
                    <a href='#Testimonials' className='hover:text-[#24286B] cursor-pointer hover:underline'>TESTIMONIALS</a>
                    <a href="#contact"><button className='btn bg-[#24286B] hover:bg-[#1a1e64] text-white rounded-3xl w-40 h-10'>CONTACT US</button></a>
                </div>

                <button onClick={() => setShowMenu(!showMenu)} className='text-2xl md:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </nav>

            {
                showMenu && (
                    <div className='md:hidden fixed top-[72px] left-0 w-full z-40 bg-white shadow-lg p-5 space-y-4 flex flex-col'>
                        <a href='#home' >HOME</a>
                        <a href='#aboutUs' >ABOUT US</a>
                        <a >OUR SERVICES</a>
                        <a href='#project' >OUR PROJECTS</a>
                        <a href='#Testimonials' >TESTIMONIALS</a>
                       <button className="bg-[#24286B] text-white rounded-full px-6 py-2">CONTACT US</button>
                    </div>
                )
            }

        </>
    )
}

export default Header