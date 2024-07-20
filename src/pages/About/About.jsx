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
   


    <div className='lg:h-screen   '>
     
    </div>
  )
}

export default About
