import React, { useRef } from 'react'
import cyber from '/cyber.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import yubraj from '/yub5.png'



const rightBox = 'items-center justify-center lg:justify-start lg:mt-0 mt-4 py-4 w-full lg:w-auto text-sm text-white font-allerta transition-transform duration-500 ease-in lg:hover:translate-x-[-6rem]   bg-gradient-to-br from-black to-gray-500 bg-opacity-1 py-2 px-4 rounded-lg flex w-fit '
const belowBox = '  bg-gradient-to-br from-black to-neutral-900 bg-opacity-1 w-1/2 px-8 flex flex-col justify-center py-4  hover:scale-110  transition-transform duration-300 ease-in hover:skew-x-6 '
function Home() {
  return (
    <>

      {/* For the mobile devices only */}
      <div className='  lg:hidden h-screen  '>
        <div className='text-center font-bold font-inter capitalize text-white text-[0.7rem]  mt-2  '>
          For better result open in laptop/pc
        </div>


     

        <p className='text-white text-2xl   text-ellipsis border-red-100  font-montserrat p-4'>
          Hi! I am yubraj Khatri
          I love to
          <span className=' font-babe  text-2xl font-thin text-fifth'> create </span>
          Learn  <span className=' font-babe  text-2xl font-thin text-fifth'> update </span> and fix but taking things from ground to  <span className='text-fifth font-babe  text-2xl font-thin'> production </span> i love most
        </p>

        <div className="left p-2 w-52 top-56 absolute z-50">


          <p className='text-white text-xl   border-red-100 text-wrap font-montserrat'>
            "Hello! I'm a full-stack developer hailing from the beautiful land of Nepal, where I craft digital solutions from front-end to back-end with passion and expertise."
          </p>
        </div>


        <div className="right absolute -right-10  h-full w-72  border-green-700  bottom-0 opacity-40 z-10" >
          <img src={yubraj} alt="" className='h-full w-full object-cover' />
        </div>

      </div>


      {/* For The Big Screens */}
      <div className="hidden lg:flex main relative  flex-col lg:h-screen   md:h-screen lg:flex-row lg: px-4 lg:pl-8    pt-16 lg:justify-between  bg-white " style={{ backgroundImage: 'linear-gradient(to bottom, #000000, #080808, #0f0f0f, #151515, #191919)' }} >

        <div className='text-white absolute lg:flex flex-col top-1/2 transform -translate-y-1/2 font-64 font-bold hidden'>
          <div className='text-white flex gap-4 '>
            <span>.</span>
            <span>.</span>
            <span>.</span>

          </div>
          <div className='text-white gap-4 flex '>
            <span>.</span>

            <span>.</span>
            <span>.</span>
          </div>
          <div className='text-white flex gap-4 '>
            <span>.</span>
            <span>.</span>
            <span>.</span>

          </div>
        </div>



        {/* For the left part */}
        <div className='  text-white flex-flex-col lg:w-1/3 lg:ml-[16rem] mt-10  lg:mt-40 h-fit justify-center items-center '>

          <div className=' border-white  border-solid border-l-2 '>
            <h3 className='text-3xl font-64 '>FULL STACK</h3>
            <h1 className='lg:text-[3.1rem] text-[2.5rem] font-64 '>DEVELOPER </h1>
          </div>
          <p className='lg:text-[0.8rem] text-[1.2rem] mt-10 lg:mt-4 font-inter  text-center lg:text-left'>I love to create Learn update and fix."Hello! I'm a full-stack developer hailing from the beautiful land of Nepal, where I craft digital solutions from front-end to back-end with passion and expertise."</p>
          <button className=' hidden lg:mt-6 mt-10 border-2 border-fifth lg:px-4 lg:py-2  px-8 py-4 rounded-sm text-2xl lg:text-base'>Let's Chat</button>
        </div>

        {/* For medium part */}
        <div className="right   lg: z-0 opacity-40 lg:opacity-100  h-[90%] w-[30%] lg:relative lg:block">
          <img src={cyber} alt="" className='lg:object-cover w-full h-full z-0  lg:block absolute top-0   left-0 object-contain opacity-20 lg:opacity-90' />
          <div className='text-white  z-10 h-[7rem]    rounded-lg lg:flex  absolute w-[44rem] left-[-20%] bottom-[-11.3%] hidden  '>
            <div className={belowBox}>
              <h1 className='font-allerta'>FRONTEND</h1>
              <p className='font-64 text-[9px] mt-3 '>What your See 👀, What is you believe it is  </p>
            </div>
            <div className={belowBox}>
              <h1 className='font-allerta'>BACKEND</h1>
              <p className='font-64 text-[8px] mt-3'>I am somwehre else. Your can't get me   </p>
            </div>
          </div>
        </div>






        {/* For the right part */}
        <div class='lg:flex lg:flex-col flex-row justify-center items-center lg:items-start  gap-20 z-20 lg:gap-4 font-black lg:relative lg:right-[-6.7rem]  mb-28 flex-wrap '>

          <a href="https://twitter.com/YubrajK81639352" target='blank'> <div className={rightBox} ><span className='mr-8 '> <FaXTwitter className='text-2xl' />  </span> Twitter/ x</div></a>
          <a href="" target='bank'> <div className={rightBox}><span className='mr-8'> <FaFacebook className='text-2xl' />  </span> Facebook</div></a>
          <a href="https://www.linkedin.com/in/yubraj-khatri-155786243/" target='blank'><div className={rightBox}><span className='mr-8'> <FaLinkedin className='text-2xl' />  </span> Linkedin</div></a>
          <a href=""><div className={rightBox}><span className='mr-8' target='blank'> <FaInstagram className='text-2xl' />  </span> Instagram</div></a>
        </div>

      </div>
    </>

  )
}

export default Home