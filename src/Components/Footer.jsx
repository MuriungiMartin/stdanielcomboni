import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logoImage from "../assets/combonilogo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between text-white p-12 bg-gradient-to-b from-black to-slate-800">
        <div className="">
          <span className="flex items-center justify-center gap-8 mr-16 pb-8">
            <img
              src={logoImage}
              alt="Church Logo"
              className="h-10 w-10 bg-black rounded-full sm:h-12 sm:w-12 mt-4 sm:mt-0 mr-8"
            />
          </span>
          <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
          <ul className="flex items-start justify-start gap-8 mr-16 text-[18]">
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
        <div className="">
          <h1 className="flex items-center justify-center gap-8 mr-16 text-2xl font-bold mb-4">Contact</h1>

          <ul className="flex items-center justify-center gap-8 mr-16 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Email: example@example.com
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-8 mr-16 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Phone: 123-456-7890
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-8 mr-16 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Address: 123 Main St, City, Country
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Quick</h1>
          <ul className="flex items-start justify-start gap-8 mr-16 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Communications
            </li>
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black text-white p-6">
        <p className="text-center text-sm mt-8">
          &copy; 2024 St Daniel Comboni Parish. All Rights Reserved.
        </p>
        {/*powered by zegen*/}
        <p className="text-end text-sm mt-8 ml-8">
            Developed by <a href="https://martinmuriungi.netlify.app/" className="text-fuchsia-600" target="blank">Martin</a>
        </p>

       
        </div>
        {/* <div className="flex items-center justify-center bg-black text-white p-6 gap-8 mr-16 text-[18]">
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                Privacy Policy
            </li>
            <li className="hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer">
                Terms of Use
            </li>
            </div> */}
    </footer>
  );
};

export default Footer;
