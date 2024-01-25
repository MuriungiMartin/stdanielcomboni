import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logoImage from "../assets/combonilogo.jpg";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="flex flex-col md:flex-row justify-between text-white p-4 md:p-12 bg-gradient-to-b from-black to-slate-800">
        <div className="mb-4 md:mb-0 text-left md:text-center">
          <span className="flex items-start justify-start px-2 py-4 gap-8 pb-8">
            <img
              src={logoImage}
              alt="Church Logo"
              className="h-10 w-10 bg-black rounded-full sm:h-12 sm:w-12 mt-4 sm:mt-0 mr-8"
            />
          </span>
          <ul className="flex items-start justify-start px-2 py-4 gap-8  text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              <FaFacebook />
            </li>
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              <FaTwitter />
            </li>
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
        {/*Contact form, News letter subscription */}
        <div className="mb-4 md:mb-0 px-2 py-4 text-left md:text-center">
          <h1 className="flex items-start justify-start gap-8 text-2xl font-bold mb-4">
            Contact
          </h1>

          <ul className="flex items-start justify-start gap-8 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Email: example@example.com
            </li>
          </ul>
          <ul className="flex items-start justify-start gap-8 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Phone: 123-456-7890
            </li>
          </ul>
          <ul className="flex items-start justify-start gap-8 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Address: 123 Main St, City, Country
            </li>
          </ul>
        </div>
        <div className="text-left px-2 py-4 md:text-center">
          <div className="mb-4 md:mb-0 lg:mr-16">
            <h1 className="flex items-start justify-start sm:justify-start sm:items-start gap-8 text-2xl font-bold mb-4 ">Quick Links</h1>
            <ul className="flex items-start justify-start gap-8 text-[18]">
              <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                Communications
              </li>
            </ul>
            <ul className="flex items-start justify-start gap-8 text-[18]">
              <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-6">
        <p className="text-left md:text-center text-sm mt-8 md:mt-0 md:mr-8">
          © 2024 St Daniel Comboni Parish. All Rights Reserved.
        </p>
        {/*powered by zegen*/}
        <p className="text-left md:text-center text-sm mt-8 md:mt-0 md:ml-8">
          Developed by{" "}
          <a
            href="https://martinmuriungi.netlify.app/"
            className="text-fuchsia-600"
            target="blank"
          >
            Martin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
