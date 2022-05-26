import React, { Component } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import STOCK1 from "../assets/stock2.jpg";
import ME from "../assets/me.png";
const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div name="about" className="w-full h-screen bg-white text-black ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w[1000px]">
          <div className="sm:text-right pb-2 text-left">
            <p
              data-scroll
              className="flex text-center justify-center text-6xl underline decoration-4 underline-offset-1 md:-mt-48 decoration-indigo-600 font-bold"
            >
              About me
            </p>
          </div>
        </div>

        <div className=" sm:text-center container">
          <div className="sm:text-right md:text-4xl font-bold">
            <p className="text-3xl md:px-5 md:ml-3 font-light text-center md:text-4xl">
              <div className="md:grid md:grid-cols-2 md:gap-9">
                <div className="py-9">
                  Hello! My name is <b>José Santos</b> , I'm <b>22 years old</b>{" "}
                  and I'm <b>half Stack Dev</b> & <b>UX/UI Designer!</b>
                  <br /> 
                  <br /> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  magnam corrupti quam iure voluptatum deserunt delectus
                  reprehenderit ex doloribus, rerum quo suscipit ipsam! Eum
                  exercitationem ex necessitatibus repellat modi amet?
                </div>
                <img
                  src={ME}
                  alt=""
                  className="hidden md:visible md:h-96 md:ml-80"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block tranform -rotate-90 bg-black -m-20 font-thin text-8xl w-[0px] ml-28 animate-pulse">
        003
      </div>
    </div>
  );
};

export default About;
