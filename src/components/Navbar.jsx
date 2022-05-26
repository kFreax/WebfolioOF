import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import Logo from "../assets/logo.png";
import Skills from "./Skills";
import Home from "./Home";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-center font-thin items-center text-4xl text-[#252525] z-10">
      <div>
        {/*         <img src={Logo} alt="Logo" style={{ width: "50px" }} /> */}{" "}
      </div>

      {/*  MENU */}

      <ul className=" hidden md:flex">
        <li className="font-thin px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:scale-105 duration-300">
          <Link to="home" duration={500}>
            Home
          </Link>
        </li>

        <li className="font-thin px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:scale-105 duration-300">
          <Link to="skills" target="_blank">
            Skills
          </Link>
        </li>

        <li className="font-thin px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:scale-105 duration-300">
          <Link to="about" duration={500}>
            About
          </Link>
        </li>

        <li className="font-thin px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:scale-105 duration-300">
          <Link to="work" duration={500}>
            Works
          </Link>
        </li>
        <li className="font-thin px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:scale-105 duration-300">
          <Link to="contact" duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*  Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" duration={500}>
            Work
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
    </div>
  );
};

export default Navbar;
