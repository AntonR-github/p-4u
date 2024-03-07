import { Link } from "react-router-dom";
import logo from "../assets/Logo/logo2.jpg";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-secondary text-white text-center">
      <div className="flex flex-col md:flex-row p-8 lg:px-28 md:px-16 px-5 justify-center items-center">
        <div className="flex flex-col gap-1/4 items-center justify-center">
        <img className="bg-cover bg-no-repeat bg-center w-16 h-16 rounded-lg mb-3" src={logo} alt="logo" />
          <p className=" mb-2 text-l">
             טלפון - וואטסאפ
          </p>
          <p className=" mb-2 text-l">
            054-4342508
          </p>
          <p className=" mb-2 text-l">
            דוא“ל
          </p>
          <p className=" mb-2 text-l">
          info@p-4u.org
          </p>
        </div>
      </div>

      <div>
        <p className=" text-center py-4">
          developed by
          <span className=" text-primary font-semibold mx-2">
            <Link to="https://antonr-dev.net/">antonr-dev.net</Link>
          </span>
          | @copyright All rights reserved ”Parnasa B`Yosher”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
