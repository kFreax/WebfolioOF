import React from "react";
import WorkImg from "../assets/work1.jpg";
import WorkImg1 from "../assets/work2.jfif";
import Posters from "./Posters";
import { render } from "react-dom";
import { Routes, Route, Link, Switch, useNavigate } from "react-router-dom";

const Work = () => {


 

  const navigate = useNavigate(); 

  return (
    <div name="work" className="w-full md:h-screen text-white bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  ">
        <div className="pb-8">
          <p className=" text-6xl py-9 md:-mt-72 text-black md:flex text-center justify-center md:text-7xl underline decoration-4 underline-offset-1  decoration-indigo-600 font-bold">
            Works
          </p>
        </div>

        <div className="grid gap-11 sm:grid-cols-4 md:grid-cols-3">
          {/* Grid Items */}
          {/* Copiar ate até aqui para novos projetos*/}
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className="shadow-lg shadow-[#252525] group container rounded-md md:h-[250px] md:w-[250px] flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                Posters
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button onClick={() => navigate('/posters')} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Check
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Copiar ate até aqui para novos projetos*/}
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className="shadow-lg shadow-[#252525] group container rounded-md md:h-[250px] md:w-[250px] flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                UX UI Designs
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Check
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Copiar ate até aqui para novos projetos*/}
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className="shadow-lg shadow-[#252525] group container rounded-md md:h-[250px] md:w-[250px] flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                Others
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Check
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block tranform -rotate-90 bg-black text-black -m-20 font-thin text-8xl w-[0px] ml-28 animate-pulse">
        004
      </div>
    </div>
  );
};

export default Work;
