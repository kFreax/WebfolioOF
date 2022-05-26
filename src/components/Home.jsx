import React, { Component } from "react";
import STOCK from "../assets/stock.jpg";
import STOCK1 from "../assets/stock2.jpg";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { HiArrowNarrowRight } from "react-icons/hi";

const buttonVar = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255.255.255)",
    boxShadow: "0px 0px 8px rgba(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div name="home" className="w-full h-screens">
      <div className=" sm:ml-10 grid grid-cols-2 gap-4 text-black">
        <motion.div
          className="inline-block text-center  ml-24 -mt-32 mx-auto text-6xl sm:block text-6xl font-bold text-left pt-72"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
        >
          José Santos
          <img
            src={STOCK1}
            alt=""
            className="flex mt-10 justify-center sm:hidden"
          />
          <motion.p className=" text-3xl mt-16 text-center sm:text-5xl font-light text-black ml-12 ">
            UX & UI DESIGNER
          </motion.p>
        </motion.div>

        <motion.div
          className="hidden md:block font-thin text-7xl rotate-32 mt-96 ml-96 rotate-90"
          initial={{opacity: 1}}
          animate={{ opacity: 100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
        >
          WEBFOLIO
          <div className="opacity-25 mt-2">WEBFOLIO</div>
          <div className="opacity-5 mt-2">WEBFOLIO</div>
        </motion.div>
      </div>

      <div className="hidden md:block transform -rotate-90 bg-black mt-72 font-thin text-8xl w-[0] ml-28 animate-pulse">
        001
      </div>
      <div className="hidden lg:flex fixed flex-col top-[70%] right-0">
        <ul>
          <li className="w-[490px] h-[200px] flex justify-between items-center mr-[-400px] hover:mr-[0.5px] duration-300 bg-indigo-500 shadow-lg shadow-indigo-500/50 ">
            <a
              className="flex justify-between items-center text-7xl w-full text-white"
              href="https://www.linkedin.com/in/jos%C3%A9-santos-566101175/"
            >
              <HiArrowNarrowRight className="rotate-180 hover:-rotate-180 duration-300" />
              WORKs
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Home;
