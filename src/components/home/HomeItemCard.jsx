import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const HomeItemCard = ({value}) => {
         const controls = useAnimation();
         const imgRef = useRef(null); // Reference to the image
         const containerHeight = 256; // h-64 in Tailwind is 256px
         const [scrollDistance, setScrollDistance] = useState(0);

         // Calculate the scroll distance once the image has loaded
         useEffect(() => {
           if (imgRef.current) {
             const imgHeight = imgRef.current.scrollHeight;
             setScrollDistance(imgHeight - containerHeight); // Scroll only the difference between image and container height
           }
         }, []);

         const handleMouseEnter = () => {
           controls.start({
             y: 0, // Scroll back to the top
             transition: { duration: 3, ease: "linear" }, // Smooth scroll
           });
         };

         const handleMouseLeave = () => {
           controls.start({
             y: -scrollDistance, // Scroll from bottom to top
             transition: { duration: 3, ease: "linear" }, // Smooth scroll
           });
         };
         
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-64 overflow-hidden border rounded-lg"
      initial={{ y: "-5rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 5,
        ease: [0.37, 0, 0.63, 1],
        delay: Number(value.id) * 2,
      }}
    >
      <motion.img
        ref={imgRef}
        src={value.img}
        alt="Scrolling Image"
        animate={controls}
        className="w-full object-cover"
      />
    </motion.div>
  );
}

export default HomeItemCard