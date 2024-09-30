import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div
      className={`w-full h-[4rem] lg:flex justify-center items-center border ${
        scrolling ? "bg-[#ffff] z-50 border-none" : "bg-[#F9F8F6]"
      } fixed top-0 left-0 z-10  transition-all duration-300 ease-in-out`}
    >
      <div className="container flex justify-between items-center xl:pl-[5rem] lg:pl-[10rem] pl-2 ">
        <div className="flex gap-4">
          <img
            src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-logo-retina.png"
            alt=""
          />
        </div>
        <div className="xl:flex items-center gap-8 hidden  ">
          {/* <span className="text-base  capitalize tracking-normal text-[#565655] hover:text-[#FF4719] hover:border-b-2 border-[#FF4719] cursor-pointer tranformation transition-all ease-in-out">
            home
          </span> */}
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            home
          </span>

          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            Page&nbsp;layouts
          </span>
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            features
          </span>
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            performance
          </span>
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            user&nbsp;Guide
          </span>
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            help
          </span>
          <span className="relative text-base capitalize tracking-normal text-[#565655] hover:text-[#FF4719] cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-[#FF4719] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0">
            Exclusive&nbsp;offers
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="py-2 px-3 border-2 border-black rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out text-black hover:text-white  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#FF4719] before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:border-transparent">
            <span className="relative z-10">Change logs</span>
          </button>

          <button className="py-2 px-3 border-2 border-transparent rounded-lg relative overflow-hidden bg-[#FF4719] transition-all duration-300 ease-in-out text-white hover:text-black  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#F9F8F6] before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:border-black">
            <span className="relative z-10">Open store Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar