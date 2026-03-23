import React, { useEffect } from 'react';
import { features } from '../export'; // ✅ FIXED PATH
import AOS from 'aos';
import 'aos/dist/aos.css';

function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="whyus"
      className="w-full lg:px-22 px-5 lg:pt-22 pt-20 pb-45 flex flex-col items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="lg:text-5xl text-3xl font-fakhwang font-semibold text-black text-center"
      >
        Why should you travel with us
      </h1>

      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-500 text-center lg:w-[60%] w-full"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="grid lg:grid-cols-3 grid-cols-1 gap-5"
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 bg-gray-200 rounded-md lg:p-10 p-6"
          >
            <span className="bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md text-white">
              <item.icon className="text-3xl" />
            </span>

            <h1 className="text-xl text-center font-semibold text-black">
              {item.name}
            </h1>

            <p className="text-gray-500 text-center">
              {item.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;