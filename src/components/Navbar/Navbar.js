import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="shadow bg-gradient-to-b from-blue-100 to-white mb-2 fixed top-0 z-[101] left-0 w-full">
        <div className="relative flex  max-w-screen-xl flex-col  overflow-hidden  px-4 py-3 md:mx-auto md:flex-row md:items-center">
          <div className="flex justify-between">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center whitespace-nowrap text-2xl font-black text-blue-500"
              // style={{ transform: "rotate(45deg)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-9 h-9 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
          </div>

          <input
            type="checkbox"
            className="peer hidden"
            id="navbar-open"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />

          <label
            className="absolute top-6  right-4 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul className="flex min-h-42px flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="text-gray-600 md:mr-12 hover:text-blue-500">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-gray-600 md:mr-12 hover:text-blue-500">
                <Link to="/help" onClick={() => setIsOpen(false)}>
                  Help
                </Link>
              </li>
              <li className="text-gray-600 md:mr-12 hover:text-blue-500">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
