// NavBar.jsx

import React from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logoImage from '../assets/combonilogo.jpg';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="bg-gradient-to-b from-purple-50 to-white lg:hidden block absolute top-16 w-full left-0 right-0  transition pt-200">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Communications">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Communications
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Events">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Events
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Blog">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Blog
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Enquiry">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate hover:rounded">
            Enquiry
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    // <nav className="bg-gray-200 fixed top-0 w-full rounded-3xl my-10 mx-10">
<nav className=" bg-gray-50 items-start  fixed top-0 w-full  border-b border-slate-200">
    <Router>
      <div className=" flex items-start justify-start z-50 text-black lg:py-5 px-20 py-4 mx-4">
        <div className="flex items-center flex-1">
          <span>
            <img
              src={logoImage}
              alt="Church Logo"
              className="h-10 w-10  rounded-full sm:h-12 sm:w-12 mt-4 sm:mt-0  mr-8"
            />
          </span>
            {/* <span className="text-2xl font-semibold px-8">St Daniel Comboni Parish</span> */}
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-start justify-start font-semibold hidden">
          <div className="flex-10">
            <ul className="flex items-start justify-start gap-8 mr-16 text-[18]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Communications">
                <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                  Communications
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Events">
                <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                  Events
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Blog">
                <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                  Blog
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Enquiry">
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
        <div className="lg:hidden flex items-center">{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

    <Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>
      </Router>
    </nav>
  );
};

export default NavBar;
