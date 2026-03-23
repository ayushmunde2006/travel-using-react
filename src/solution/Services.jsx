import React, { useEffect } from 'react';
import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.webp';
import service3 from '../assets/service3.webp';
import service4 from '../assets/service4.webp';
import service5 from '../assets/service5.webp';
import service6 from '../assets/service6.webp';
import { FaPlay } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20 flex flex-col justify-between lg:items-center items-left gap-5"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="lg:text-5xl text-3xl font-Fakhwang font-semibold"
      >
        Discover your next dream destination
      </h1>

      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-500 lg:w-[60%] w-full"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat
        nisi doloribus nam illum laudantium. Esse veniam quam voluptates sint
        enim unde ipsum, ut, earum amet, dignissimos explicabo ullam libero.
      </p>

      <hr
        data-aos="zoom-in"
        data-aos-delay="300"
        className="lg:w-[7%] w-[20%] border-2 border-orange-600"
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        id="first-row"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5"
      >
        {/* LEFT */}
        <div
          id="left"
          className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5"
        >
          {/* Card 1 */}
          <div
            style={{ backgroundImage: `url(${service1})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className="w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                   <FaPlay className="lg:text-2xl text-xl" /> 
            </div>
         
          </div>

          {/* Card 2 */}
          <div
            style={{ backgroundImage: `url(${service2})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className="lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3">
              <FaPlay className="lg:text-2xl text-xl" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div id="right" className="lg:w-[50%] w-full">
          <div
            style={{ backgroundImage: `url(${service3})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className=" lg:w-[20%] lg=[20%] bg-white rounded-full flex justify-center items-center p-3">
              <FaPlay className="lg:text-2xl text-xl" />
            </div>
              
          </div>
        </div>
      </div>
       <div
        data-aos="zoom-in"
        data-aos-delay="400"
        id="second-row"
        className="w-full flex lg:flex-row-reverse  flex-col justify-between items-center gap-5 mt-5"
      >
        {/* LEFT */}
        <div
          id="left"
          className="lg:w-[50%] w-full "
        >
          {/* Card 1 */}
          <div
            style={{ backgroundImage: `url(${service4})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className="w-[20%]  bg-white rounded-full flex justify-center items-center p-3">
                   <FaPlay className="lg:text-2xl text-xl" /> 
            </div>
         
          </div>
          </div>
 {/* RIGHT */}
        <div id="right" className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5">
          {/* Card 2 */}
          <div
            style={{ backgroundImage: `url(${service5})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className="lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3">
              <FaPlay className="lg:text-2xl text-xl" />
            </div>
          </div>
        </div>

       
          <div
            style={{ backgroundImage: `url(${service6})` }}
            className="relative bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end"
          >
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40 to-white/10"></div>

            <div className="relative z-10 w-full flex flex-col justify-between items-start gap-3">
              <h1 className="text-white text-2xl font-semibold">
                Padar island
              </h1>
              <p className="text-white text-lg">Indonesia</p>
            </div>

            <div className=" lg:w-[20%] lg=[20%] bg-white rounded-full flex justify-center items-center p-3">
              <FaPlay className="lg:text-2xl text-xl" />
            </div>
              
          </div>
        </div>
      </div>
    
  );
}

export default Services;