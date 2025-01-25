import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { alchemy, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav
      className={`w-full fixed top-0 z-20 bg-primary bg-opacity-90 shadow-md py-4 ${styles.paddingX}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={alchemy} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Emiliano Rozas &nbsp;
            <span className="sm:block hidden">| Full-stack developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "text-white" : "text-gray-300"
                } hover:text-white hover:underline underline-offset-4 transition duration-300 text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{t.navbar[link.id]}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 ml-4">
          <button
            className={`text-white ${language === "en" ? "font-bold underline underline-offset-4" : ""
              } hover:underline transition`}
            onClick={() => toggleLanguage("en")}
          >
            EN
          </button>
          <span className="text-gray-400">|</span>
          <button
            className={`text-white ${language === "es" ? "font-bold underline underline-offset-4" : ""
              } hover:underline transition`}
            onClick={() => toggleLanguage("es")}
          >
            ES
          </button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.id ? "text-white" : "text-gray-300"
                    } font-medium cursor-pointer text-[16px] hover:text-white`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{t.navbar[link.id]}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
