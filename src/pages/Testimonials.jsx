import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {


  const testimonials = [
    {
      comment: "We partnered with Bright Hurst for a large-scale commercial project involving MEP and civil works. Their professionalism, technical expertise, and timely execution made them a reliable choice. They handled complex challenges with ease and efficiency.",
      name: "Mohammed Khalid,",
      title: "Project Manager, GulfTech Engineering",
      img: "/person1.png"
    },
    {
      comment: "Bright Hurst exceeded our expectations in every aspect of the project. Their interior fit-out work was precise, elegant, and truly reflected our vision. The team maintained clear communication and delivered on time without compromising on quality.",
      name: "Aisha Rahman,",
      title: "Managing Director, Al Noor",
      img: "/person2.png"
    },
    {
      comment: "From start to finish, Bright Hurst delivered a seamless experience. Their attention to detail and commitment to quality craftsmanship made our residential project stand out. Highly recommended for anyone looking for trusted construction partners in the UAE.",
      name: "Sara Al Farsi,",
      title: "Homeowner, Jumeirah Dubai",
      img: "/person3.png"
    }
  ]


  return (
    <div className='p-15 px-15 mb-20' id='Testimonials'>
      <p >▪ Testimonials</p>
      <h1 className='sm:my-10 sm:text-5xl font-medium'>Voices of Trust That Reflect Our<br /> Commitment and Craftsmanship</h1>

      {/* testimonials */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30 items-start'>

        {testimonials.map((person, index) => (
          <div key={index} className={index === 1 ? 'bg-[#F5F5F5] rounded-2xl mt-20 p-5' : 'bg-[#F5F5F5] rounded-2xl p-5 mt-40'}>
            <p>{person.comment}</p>

            <div className='flex mt-10'>
              <img src={person.img} alt={person.name} />
              <h1 className='ms-5 font-bold'>
                {person.name}<br />
                <span className='font-medium'>{person.title}</span>
              </h1>
            </div>
          </div>
        ))}

      </div>

      {/* Buttons */}
      <div className='flex gap-5 justify-center mt-10 text-2xl'>
        <div className='w-fit h-fit border-2 border-[#24286B] rounded-full'>
          <button><FontAwesomeIcon className='text-[#24286B]' icon={faAngleLeft} /></button>
        </div>
        <div className='w-fit h-fit border-2 border-[#24286B] rounded-full'>
          <button><FontAwesomeIcon className='text-[#24286B]' icon={faAngleRight} /></button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials