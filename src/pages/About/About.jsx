import React from 'react'
import Stacks from './Stacks'
import Terminal from '../../Helpers/terminal/Terminal'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function About() {
const container=useRef(null)
  useGSAP(()=>{
    gsap.to(container.current, { scale: 2, opacity: 1, duration: 1, ease: 'power3.inOut' });

  })
  return (
   


  <div className='h-screen flex  '>


    <div className="left w-1/2  h-full  relative">
    <div className="image1 h-96 w-64 object-cover rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
    <img src="https://w0.peakpx.com/wallpaper/107/489/HD-wallpaper-batman-anime-dark-darkknight-dc-joker-justice-league.jpg" alt="" className='h-full w-full object-cover rounded-3xl' />
    </div>


    <div className="image1 h-96 w-64 object-cover rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 z-20">
    <img src="https://w0.peakpx.com/wallpaper/107/489/HD-wallpaper-batman-anime-dark-darkknight-dc-joker-justice-league.jpg" alt="" className='h-full w-full object-cover rounded-3xl' />
    </div>


    <div className="image1 h-96 w-64 object-cover rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 z-20">
    <img src="https://w0.peakpx.com/wallpaper/107/489/HD-wallpaper-batman-anime-dark-darkknight-dc-joker-justice-league.jpg" alt="" className='h-full w-full object-cover rounded-3xl' />
    </div>
    </div>



    <div className="right w-1/2 flex flex-col justify-center  items-center">
    <h1 className='text-red-500 font-bold text-4xl font-inter  '>What i love to do actually</h1>
    <p className='text-fifth font-semibold px-10 mt-2 text-2xl text-center'>To be honest i am quite good in copy things but my creative nature is somewhere under water i am watching fiction movies for that. Suggest me fiction movies please !</p>
    <p className='text-fifth font-bold text-xl mt-10'>Please !!!</p>
    <p className='text-fifth font-bold text-xl'>Please !!!</p>
    <p className='text-fifth font-bold text-xl'>Please !!!</p>
    </div>
  </div>
  )
}

export default About
