import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import TAILWIND from "../assets/tailwind.png";
import AI from "../assets/ailogo.png";
import PS from "../assets/pslogo.png";
import XD from "../assets/xdlogo.png";
import FIGMA from "../assets/figmalogo.png";
import RATING1 from "../assets/rating.png";
import { info } from "autoprefixer";
import "../index.css";

import { useState } from "react";

import Progressbar from "react-js-progressbar";

const Skills = () => {
  const [percentage, setPercentage] = useState(80); //% HTML
  const [percentage2, setPercentage2] = useState(80); // % CSS
  const [percentage3, setPercentage3] = useState(15); // % TAILWIND

  const [percentage4, setPercentage4] = useState(100); // % AI
  const [percentage5, setPercentage5] = useState(70); // % PS
  const [percentage6, setPercentage6] = useState(90); // % XD
  const [percentage7, setPercentage7] = useState(25); // % FIGMA

  const change_progressbar_input = () => {
    setPercentage(100);
  };

  return (
    <div name="skills" className="w-full h-screen text-black ">
      {/* Container */}

      <div className="w-full h-screen">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full ">
          <div>
            <p className="text-6xl py-8 md:py-2 md:flex text-center justify-center underline decoration-4 underline-offset-1  decoration-indigo-600 font-bold mt-32">
              Experiencias
            </p>
            <p className="hidden sm:flex py-1  justify-center font-thin text-3xl text-black m-12">
              // Algumas das ferramentas que mais utilizo
            </p>
          </div>
          <div className=" w-full grid grid-cols-2 mb-2 sm:grid-cols-4 gap-9 text-center ">
            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="html icon" />
              <p className="my-4 font-bold">HTML</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage}
                  pathWidth={10}
                  size={70}
                  customText={"GOOD"}
                  clockwise={false}
                  shape={"semi circle"}
                  pathColor={["#f16529", "#e44d26"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="css icon" />
              <p className="my-4 font-bold">CSS</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage2}
                  pathWidth={10}
                  customText={"GODLY"}
                  size={70}
                  clockwise={false}
                  shape={"semi circle"}
                  pathColor={["#0277bd", "#039be5"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className="drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={TAILWIND} alt="tail icon" />
              <p className="my-4 font-bold">TAILWIND</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage3}
                  pathWidth={10}
                  size={70}
                  customText={"NOOB"}
                  clockwise={false}
                  shape={"semi circle"}
                  pathColor={["#44a8b3", "#44a8b7"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={AI} alt="ai icon" />
              <p className="my-4 font-bold">Adobe Illustrator</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage4}
                  pathWidth={10}
                  size={70}
                  clockwise={false}
                  shape={"semi circle"}
                  customText={"GOD"}
                  pathColor={["#ff9a00", "#330000"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={PS} alt="ap icon" />
              <p className="my-4 font-bold">Adobe Photoshop</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage5}
                  pathWidth={10}
                  size={70}
                  customText={"GOOD"}
                  clockwise={false}
                  shape={"semi circle"}
                  pathColor={["#31a8ff", "#001e36"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={XD} alt="xd icon" />
              <p className="my-4 font-bold">Adobe XD</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage6}
                  pathWidth={10}
                  size={70}
                  clockwise={false}
                  customText={"EXPERT"}
                  shape={"semi circle"}
                  pathColor={["#470137", "#e956df"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>

            <motion.div className=" drop-shadow-lg hover:scale-90 hover:bg-indigo-300 hover:text-[#252525] duration-500">
              <img className="w-20 mx-auto" src={FIGMA} alt="figma icon" />
              <p className="my-4 font-bold">Figma</p>
              <div
                id="progressbarContainer"
                className="hidden md:flex md:justify-center"
              >
                <Progressbar
                  input={percentage7}
                  pathWidth={10}
                  customText={"NOOB"}
                  size={70}
                  clockwise={false}
                  shape={"semi circle"}
                  pathColor={["#0277bd", "#039be5"]} // use an array for gradient color.
                  trailWidth={15}
                  trailColor="#363636" // use a string for solid color.
                  textStyle={{ fill: "black" }} // middle text style
                ></Progressbar>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hidden sm:block tranform -rotate-90 bg-black -m-20 font-thin text-8xl w-[0px] ml-28 animate-pulse">
          002
        </div>
      </div>
    </div>
  );
};

export default Skills;
