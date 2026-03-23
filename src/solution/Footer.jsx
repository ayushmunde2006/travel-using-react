import React from 'react'
import { IoIosMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter , FaLinkedin ,FaFacebook  } from 'react-icons/fa'




function Footer() {
  return (
    <div id="contact" className="w-full bg-black lg:px-22 px-5 px-10 flex flex-col justify-center items-center gap-12">
      <div id="top " className="bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-[120px] gap-6">
        <div className="lg:w-[70%] w-full flex flex-col justify-between items-start gap-5">
          <h1 className="text-3xl font-fakhwang font-semibold text-while textt-left lg:w-[60%] w-full ">
             crafting unforgettable journey , one adventure at a time </h1>
             <hr className="lg:w-[10%] w-[20%] border-2 border-orange-600"/>

        </div>
        <div className="lg:w-[30%] w-full flex f;ex-col justify-between items-start gap-5">
          <h1 className="text-white text-xl ">Subscribe our Newsletter</h1>
          <div className="flec lg:flex-row flex-col gap-3 w-full">
            <input type="email" placeholder="Enter your email" className='bg-white p-3 rounded-md text-black'>
            </input>
            <button className='bg-orange-600 text-white p-3 rounded-md  '>Subscribe</button>

          </div>
        </div>
      </div>
      <div id="mid " className=' w-full text-white flex lg:flex-row flex-col justify-between items-start gap-10'>

        <div className='lg:w-[40%] w-full '>
          <h1 className='text-3xl font-fakhwang font-semibold '>Globesprint</h1>
          <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, assumenda aliquam nobis pariatur ipsum necessitatibus asperiores nemo laudantium maiores officiis nostrum provident saepe rerum libero sunt magni soluta placeat unde.</p>
          <div className='flex flex-col justify-between item-start gap-2 mt-5'>
            <div className=" flex justify-start items-center gap-2"><IoIosMail className="text-orange-600 text-xl"/>
              <p>hello@globespring.com</p>
            </div>
              <div className=" flex justify-start items-center gap-2"><FaPhoneAlt className="text-orange-600 text-xl"/>
              <p>+91 8985558787</p>
            </div>
          </div>
        </div>

<div className="lg:w-[20%] w-full">
  <h1 className="text-xl font-medium font-fakhwang ">Quick links </h1>
  <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Home</li>
     <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>About</li>
      <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Servies</li>
       <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Features</li>
        <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>contact</li>
  </ul>
</div>
<div className="lg:w-[20%] w-full">
  <h1 className="text-xl font-medium font-fakhwang ">Follow us </h1>
  <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaFacebook className="text-orange-600 text-xl "/>Facebook</li>
     <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><AiFillInstagram className="text-orange-600 text-xl "/>Instagram</li>
      <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaLinkedin className="text-orange-600 text-xl "/>linkedin</li>
       <li className='text-gray-300 hover:text-orange-600 cursor-pointer'><FaTwitter className="text-orange-600 text-xl "/>twitter</li>
       
  </ul>
</div>
      </div>
      <hr className='w-full border-1 border-gray-800'/>
      <div className="flex justify-between items-center gap-2">
        <p className="text-gray-300 text-center ">copyright 2026 , Globesprint , All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer