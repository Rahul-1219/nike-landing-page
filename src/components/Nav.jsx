import React, { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { cross, hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`${isOpen && "z-50"} padding-x py-8 absolute z-10 w-full`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray
                hover:text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {isOpen ? (
            <img
              src={cross}
              alt="cross"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={toggleNavbar}
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={toggleNavbar}
            />
          )}
        </div>
      </nav>
      {isOpen && (
        <div
          className="bg-white backdrop-blur-md bg-opacity-40 
        p-5 mt-5 w-full max-lg:block hidden"
        >
          <ul className="flex-1 flex flex-col justify-center items-center gap-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-900 
                  hover:text-xl transition ease-in-out delay-300"
                  onClick={toggleNavbar}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
