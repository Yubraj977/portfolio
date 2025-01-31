import React from 'react'
import {motion} from 'framer-motion'
function Card({image,title,technology,link ,description}) {
  return (
    <>
 
<div className="max-w-xs bg-gray-900 border border-gray-20 rounded-lg shadow dark:bg-gray-80 dark:border-gray-70 ">
   <div className=' h-40 w-full'>
    <a href={link} >
        <img className="rounded-t-lg w-full h-full object-cover" src={image} alt="" />
    </a>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-inter">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-slate-400 font-inter">{description}</p>
        <p className='text-teal-500 font-inter'>{technology}</p>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 ">
            view
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              
            </svg>
        </a>
    </div>
</div>




    </>
  )
}

export default Card
