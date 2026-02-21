import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Map from './Map'
import Contact from './Contact'

function LandingPage() {
    return (
        <div className='flex flex-col'>

            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Map/>
            <Footer />

        </div>
    )
}

export default LandingPage