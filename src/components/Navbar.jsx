import { useState } from "react";
import logo from "../assets/Logo/logo2.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <img className="bg-cover bg-no-repeat bg-center w-16 h-16 rounded-lg" src={logo} alt="logo" />
          <Link to="/" className=" font-bold text-2xl">
            פרנסה ביושר
            <p className="font-normal text-sm">
           טלפון - 054-4342508   
          </p>
          </Link>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/contactUs"
            className=" hover:text-tertiary transition duration-200 ease-linear"
          >
            תמכו בנו
          </Link>
          <Link
            to="/board"
            className=" hover:text-tertiary transition duration-200 ease-linear"
          >
            מובילי שינוי
          </Link>
          <Link
            to="/ourStory"
            className=" hover:text-tertiary transition duration-200 ease-linear"
          >
            הסיפור שלנו
          </Link>
          <Link
            to="/whatWeDo"
            className=" hover:text-tertiary transition duration-200 ease-linear"
          >
            מה אנחנו עושים
          </Link>
          <Link
            to="/"
            className=" hover:text-tertiary transition duration-200 ease-linear"
          >
            ראשי
          </Link>

        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          to="/"
          className=" hover:text-tertiary transition duration-200 ease-linear"
        >
          ראשי
        </Link>
        <Link
          to="/whatWeDo"
          className=" hover:text-tertiary transition duration-200 ease-linear"
        >
          מה אנחנו עושים
        </Link>
        <Link
          to="/ourStory"
          className=" hover:text-tertiary transition duration-200 ease-linear"
        >
         הסיפור שלנו
        </Link>
        <Link
          to="/board"
          className=" hover:text-tertiary transition duration-200 ease-linear"
        >
          מובילי שינוי
        </Link>
        <Link
          to="/contactUs"
          className=" hover:text-tertiary transition duration-200 ease-linear"
        >
           תמכו בנו
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
