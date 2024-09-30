
import React, { useState } from 'react'

const Home2Card = ({value}) => {
     const [hoveritem, setHovering] = useState();
     const hoverHandler = (name) => {
       setHovering(name);
     };
     
  return (
    <div
      onMouseEnter={() => hoverHandler(`${value._id}`)}
      onMouseLeave={() => hoverHandler()}
      className="w-full h-[15rem] border shadow-lg bg-[#FFFFFF] rounded-md flex justify-center items-center text-justify flex-col gap-4 hover:text-white hover:bg-[#FF4719] transition-all duration-300 ease-in-out cursor-pointer"
       
    >
      <span
        className={`text-5xl font-bold  ${
          hoveritem === `${value._id}` ? "text-white" : "text-[#FF4719]"
        }`}
      >
        {/* <CiHeart /> */}
        {value.icon}
      </span>
      <h3 className="text-xl font-medium tracking-normal">{value.name}</h3>
      <p className="text-sm sm:w-[20rem] tracking-tight font-mono p-4">
        {value.des}
      </p>
    </div>
  );
}

export default Home2Card