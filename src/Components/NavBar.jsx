import React from "react";
import { Link } from "react-scroll";
import {  FaTimesCircle } from "react-icons/fa";
//import { CiMenuFries } from "react-icons/ci";
import { TfiAlignJustify } from "react-icons/tfi";
import logoImage from "../assets/combonilogo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LandingPage from "./Landing";
import Communications from "./Communications";
import Blog from "./Blog";
import Events from "./Events";
const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <div className="bg-gradient-to-b from-purple-50 to-white lg:hidden block absolute top-16 w-full left-0 right-0  transition pt-200">
      <ul className="text-center text-xl p-20">
        <NavLink to="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Home
          </li>
        </NavLink>
        <NavLink to="/Communications">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Communications
          </li>
        </NavLink>
        <NavLink to="/Events">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Events
          </li>
        </NavLink>
        <NavLink to="/Blog">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Blog
          </li>
        </NavLink>
        <Link to="Enquiry">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Inquiry
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <nav className=" bg-gradient-to-b from-white to-purple-100 items-start  fixed top-0 w-full sm:pt-0 sm:mt-0 border-b border-slate-200">
          <div className=" flex items-start justify-start z-50 text-black lg:py-5 px-20 py-4 mx-4">
            <div className="flex items-center flex-1 sm:pt-0">
              <span>
                <img
                  src={logoImage}
                  alt="Church Logo"
                  className="h-10 w-10  rounded-full  sm:h-12 sm:w-12 mt-4 sm:mt-0  mr-8"
                />
              </span>
              {/* <span className="text-2xl font-semibold px-8">St Daniel Comboni Parish</span> */}
            </div>
            <div className="lg:flex md:flex lg: flex-1 items-start justify-start font-semibold hidden">
              <div className="flex-10">
                <ul className="flex items-start justify-start gap-8 mr-16 text-[18]">
                  <NavLink to="/">
                    <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                      Home
                    </li>
                  </NavLink>
                  <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                    <NavLink to="/Communications">
                      Communications
                    </NavLink>
                  </li>

                  <NavLink to="/Events">
                    <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                      Events
                    </li>
                  </NavLink>
                  <NavLink to="/Blog">
                    <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                      Blog
                    </li>
                  </NavLink>
                  <Link to="Enquiry">
                    <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                      Inquiry
                    </li>
                  </Link>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              />
            </div>
            <div className="lg:hidden flex items-center">
              {click && content}
            </div>
            <button
              className="block sm:hidden transition"
              onClick={handleClick}
            >
              {click ? <FaTimesCircle /> : <TfiAlignJustify />}
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Communications" element={<Communications />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default NavBar;
