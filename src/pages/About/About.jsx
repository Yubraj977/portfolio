import React from 'react'

import Stacks from './Stacks'

import Terminal from '../../Helpers/terminal/Terminal'
function About() {
  return (
   


    <div className='h-screen  bg-fifth '>
      <div className=' h-full'>
        <h1 className='text-4xl text-white flex justify-center  pt-10 font-allerta'>Know About me from commad Line</h1>
       <Terminal />
       </div>
    </div>
  )
}

export default About
