import { useState } from "react";

import { close, logo, menu } from "../assets/static/index.js";
import { navLinks } from "../constants";
import {useTranslation} from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
    const { t } = useTranslation();

    const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] hover:text-secondary selection:text-secondary 
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        {/*<div className="flex  select-none" >*/}
        {/*    <div className="flex flex-row items-center right-1 pl-4 ">*/}
        {/*        <button className="p-2 flex flex-row items-center"*/}
        {/*                onClick={() => changeLanguage('en')} >*/}
        {/*            <span className="ml-1"> <span className="fi fi-gb"></span></span>*/}
        {/*        </button>*/}

        {/*        <button className="p-2 flex flex-row items-center"*/}
        {/*                onClick={() => changeLanguage('tr')}*/}
        {/*        >*/}
        {/*            <span className="ml-1"> <span className="fi fi-tr"></span></span>*/}
        {/*        </button>*/}
        {/*    </div>*/}

        {/*</div>*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
