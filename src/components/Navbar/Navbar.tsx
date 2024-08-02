"use client";
import React, { useState } from "react";
import { NavUtil } from "./NavUtils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button1 from "@/app/helpers/Button1";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const search = useSearchParams();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-hero border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo  */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} className="h-8" alt="EduFundr Logo" />
        </a>
        {/* Connect button  */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button1>Connect Wallet</Button1>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* NavList  */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavUtil.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`flex items-center p-2 text-white rounded-lg hover:font-semibold group  ${
                      search.get(item.param) == "true" &&
                      "text-button font-semibold"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
