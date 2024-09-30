import React, { useEffect, useRef, useState } from 'react'
import img1 from "../assets/10006.png";
import img2 from "../assets/10008.jpg";
import img3 from "../assets/10009.jpg";
import img4 from "../assets/10010.jpg";
import img5 from "../assets/10011.jpg";
import img6 from "../assets/10012.png";
import img7 from "../assets/10013.png";
import img8 from "../assets/10014.jpg";
import img9 from "../assets/10007.png";
import { motion } from 'framer-motion';
const Home = () => {

    const images = [
     img2,img3,img4,img5,img6,img7,img8
    ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const [width, setWidth] = useState(0);
      const carouselRef = useRef(null);

      useEffect(() => {
        const updateWidth = () => {
          if (carouselRef.current) {
            setWidth(carouselRef.current.offsetWidth);
          }
        };

        // Set initial width
        updateWidth();

        // Update width on window resize
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
      }, [images.length]);
  
  return (
    <div className="w-full h-screen flex flex-col relative bg-[#F9F8F6]">
      <div className="w-[40rem] h-[65rem] absolute -top-[10rem] -left-[25rem]  md:flex hidden z-10">
        <img
          src={img1}
          alt=""
          className="w-full h-full"
         
        />
      </div>
      <div className="absolute top-1/3 left-1/4 md:flex flex-col hidden">
        <motion.div
          className="flex flex-col "
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="flex gap-4 text-[48px] font-medium tracking-tight text-[#141414] leading-none">
              <span className="text-[#141414] flex gap-4">
                <span>Creative</span>
                <span className="">multi-purpose</span>
              </span>
            </h1>
          </div>
          <div>
            <h1 className="flex gap-4 text-[48px] font-medium tracking-tight text-[#141414] ">
              <span className="text-[#141414] flex gap-4">
                <span className="text-[#FF4719]">Shopify</span>
                theme
              </span>
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="decription w-[27rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl font-light text-[#7C7C7B] tracking-wide">
            <span>
              <span className="text-[#FF4719]">#1 Best Selling</span>
              Shopify Theme of all time on Envato.
              <br />
              An all-in-one template for your Shopify store, allowing you to
              create various structures and meet specific requirements.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0, y: "2rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.5 }}
        >
          <button className="py-2 px-3 border-2 border-transparent rounded-lg relative overflow-hidden bg-[#FF4719] transition-all duration-300 ease-in-out text-white hover:text-black  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#F9F8F6] before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:border-black">
            <span className="relative z-10">Buy Now-Only $89</span>
          </button>
          <button className="py-2 px-3 border-2 border-black rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out text-black hover:text-white  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#FF4719] before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:z-0 hover:before:h-full hover:border-transparent">
            <span className="relative z-10">Start Free Trial</span>
          </button>
        </motion.div>
      </div>
      <div className="absolute md:top-1/3 md:right-0 flex flex-col md:w-[35rem] w-full h-[25rem] shadow-lg bg-[#F9F8F6] rounded-md p-4 border ">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#585858]"></div>
          <div className="w-2 h-2 rounded-full bg-[#585858]"></div>
          <div className="w-2 h-2 rounded-full bg-[#585858]"></div>
        </div>

        <div
          className="md:m-4 border w-full h-full rounded-md overflow-hidden relative"
          ref={carouselRef}
        >
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * width }} // Dynamic width for responsive design
            transition={{ duration: 0.5 }}
            style={{ width: `${images.length * 100}%` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / images.length}%` }} // Ensure each slide takes full container width
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute md:top-1/2 top-1/3 md:right-[30rem] left:0 w-[14rem] h-[20rem] border shadow-lg bg-[#F9F8F6] rounded-3xl overflow-hidden ">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `${-currentIndex * 100}%` }} // 300 is the width of the slide
          transition={{ duration: 0.5 }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[14rem] h-[20rem] bg-gray-200 flex-shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-4 w-[12rem] overflow-hidden">
        <motion.img
          src={img9}
          alt=""
          animate={{ rotate: 360 }} // 360-degree rotation
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 5, // Duration of one rotation in seconds
            ease: "linear", // Smooth constant speed rotation
          }}
        />
      </div>
    </div>
  );
}

export default Home