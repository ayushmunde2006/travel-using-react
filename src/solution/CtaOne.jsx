import React, {useEffect} from 'react'
import cta1 from '../assets/cta1.webp'
import {FaPlay} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CtaOne() {
    useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
  return (
    <div  id="cta1" style={{ backgroundImage:`url(${cta1})`}} className='relative w-full lg:h-[500px] h-full lg:p-22 p-10 flex flex-col justify-center items-center  gap-5 bg-cover bg-center '>
 <div className="absolute inset-0 bg-black/50"></div>
<div className='relative z-10 flex flex-col justify-center items-center gap-5'>
  <h1 data-aos="zoom-in " data-aos-delay="100" className="lg:text-5xl text-3xl text-white font-fakhwang ">Lorem ipsum dolor sit amet is delectus </h1>
 <p data-aos="zoom-in " data-aos-delay="200" className="text-white lg:w-[50%] w-full text-lg text-center  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, laudantium mollitia pariatur et natus voluptatum, quae delectus architecto sapiente ea temporibus repudiandae quaerat tempore aliquam vitae ipsa nisi omnis voluptate!</p>
<div data-aos="zoom-in" data-aos-delay="300" className="bg-white lg:p-7 p-4 rounded-full ">
  <FaPlay className="text-orange-600 text-2xl"/>
</div>
</div>
    </div>
  );
};

export default CtaOne;