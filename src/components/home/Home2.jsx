import React, { useEffect, useRef, useState } from 'react'

import Home2Card from './Home2Card';
import { CiHeart, CiStar, CiSearch } from "react-icons/ci";
import {
  IoSettingsOutline,
  IoCallOutline,
  IoFolderOutline,
} from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import HomeItemCard from './HomeItemCard';


const cardData = [
  {
    _id: 1,
    icon: <CiHeart />,
    name: "UI/UX",
    des: "Mobile Optimized Design & Incredible Design/UI/UX, keep your store looking fresh and perfect.",
  },
  {
    _id: 2,
    icon: <CiStar />,
    name: "Stunning Design",
    des: "Want to increase your sales just in the first visit. Come to us & you will see how miracle our flagship shopify themes are.",
  },
  {
    _id: 3,
    icon: <IoSettingsOutline />,
    name: "Easy to Use and Implement",
    des: "We analyze, then support you the best methods for any necessary processes or features make your website operate stably and smoothly.",
  },
  {
    _id: 4,
    icon: <IoCallOutline />,
    name: "Outstanding Support",
    des: "Get the best technical support around! If you have questions or problems, just Contact us, we're here to help!",
  },
  {
    _id: 5,
    icon: <IoFolderOutline />,
    name: "Browser Compatibility",
    des: "One of our goal is to bring you compatible themes with most of the commonly used browsers which become a business core advantage.",
  },
  {
    _id: 6,
    icon: <CiSearch />,
    name: "Search Engine Optimization",
    des: "Combination of SEO and our web development team make a powerful weapon to get super high conversion rate websites.",
  },
];

const itemCard = [
  {
    id: 1,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-1.jpg",
  },
  {
    id: 2,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-2.jpg",
  },
  {
    id: 3,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-3.jpg",
  },
  {
    id: 4,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-4.jpg",
  },
  {
    id: 5,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-5.jpg",
  },
  {
    id: 6,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-6.jpg",
  },
  {
    id: 7,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-7.jpg",
  },
  {
    id: 8,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-8.jpg",
  },
  {
    id: 9,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-9.jpg",
  },
  {
    id: 10,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-10.jpg",
  },
  {
    id: 11,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-11.jpg",
  },
  {
    id: 12,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-12.jpg",
  },
  {
    id: 13,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-13.jpg",
  },
  {
    id: 14,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-14.jpg",
  },
  {
    id: 15,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-15.jpg",
  },
  {
    id: 16,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-16.jpg",
  },
  {
    id: 17,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-17.jpg",
  },
  {
    id: 18,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-18.jpg",
  },
  {
    id: 19,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-19.jpg",
  },
  {
    id: 20,
    img: "https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/homepages/ella-home-20.jpg",
  },
];

const Home2 = () => {
   


   
  return (
    <div className="w-full h-auto flex items-center justify-center bg-[#F9F8F6]">
      <div className="container p-4">
        <div className="w-full h-auto grid gap-4 min-[430px]:[grid-template-columns:repeat(auto-fill,minmax(25rem,1fr))]">
          {cardData.map((value, index) => (
            <motion.div
              initial={{ y: "-5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 5,
                ease: [0.5, 1, 0.89, 1],
                delay: index * 0.1,
              }}
            >
              <Home2Card key={value._id} value={value} />
            </motion.div>
          ))}
        </div>
        {/* Achievements */}
        <div className="mt-[5rem] flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-medium capitalize text-[#ff4719]">
              The Achievements We Get
            </h2>
            <p className="text-base font-mono tracking-tighter">
              We always try harder every day to give our customers the best
              experience.
            </p>
          </div>
          <div className=" flex gap-4 justify-center flex-wrap mt-8">
            <div className="w-[20rem] h-[10rem]  flex gap-4 items-center">
              <div className="w-[7rem] h-[7rem] border-2 rounded-full border-[#FF4719] flex justify-center items-center">
                <span className="text-5xl text-[#FF4719] font-bold">
                  <TfiCup />
                </span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl font-mono tracking-normal">Sales</h3>
                <p className="text-4xl font-medium">40,000+</p>
              </div>
            </div>
            <div className="w-[20rem] h-[10rem] flex gap-4 items-center">
              <div className="w-[7rem] h-[7rem] border-2 rounded-full border-[#FF4719] flex justify-center items-center">
                <span className="text-5xl text-[#FF4719] font-bold">
                  <FaRegUser />
                </span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl font-mono tracking-normal">Customers</h3>
                <p className="text-4xl font-medium">40,000+</p>
              </div>
            </div>
            <div className="w-[20rem] h-[10rem]  flex gap-4 items-center">
              <div className="w-[7rem] h-[7rem] border-2 rounded-full border-[#FF4719] flex justify-center items-center">
                <span className="text-5xl text-[#FF4719] font-bold">
                  <CiStar />
                </span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl font-mono tracking-normal">Reviews</h3>
                <p className="text-4xl font-medium">40,000+</p>
              </div>
            </div>
          </div>
        </div>
        {/* ella card */}
        <motion.div
          className="mt-4 flex gap-4 items-center"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 5,
            ease: [0.5, 1, 0.89, 1],
          }}
        >
          <div>
            <img
              src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/elite-author.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/top-theme.png"
              alt=""
            />
          </div>
        </motion.div>
        {/* 50+ */}
        <div className="flex flex-col gap-4 items-center mt-[5rem]">
          <motion.h1
            className="flex flex-col items-center gap-2 text-5xl font-bold text-[#ff4719]"
            initial={{ y: "5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              ease: [0.5, 1, 0.89, 1],
              delay: 3,
            }}
          >
            <span>
              50
              {/* <sup className='font-semibold text-5xl'>+</sup> */}
            </span>
            Home pages
          </motion.h1>
          <motion.p
            className="text-sm font-mono tracking-tight text-center sm:w-[35rem] w-full"
            initial={{ y: "5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              ease: [0.5, 1, 0.89, 1],
              delay: 4,
            }}
          >
            31+ Available Homepages, more are coming soon. Multiple layouts and
            styles with
            <strong className="font-medium text-base">
              {" "}
              multiple flexible theme sections{" "}
            </strong>
            allow you to create different structures and satisfy any specific
            requirements. Ella is fully compatible with Shopify OS 2.0, offers
            the maximum customizability.
          </motion.p>
        </div>

        {/* card */}
        <div className='flex justify-center items-center'>
          <div className="w-full h-auto grid gap-4 min-[430px]:[grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] mt-[5rem] justify-center items-center">
            {itemCard.map((value) => (
              <HomeItemCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2