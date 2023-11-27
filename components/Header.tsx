"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/assets";

const links = [
  {
    id: 1,
    link: "About Us",
  },
  {
    id: 2,
    link: "How it work",
  },
  {
    id: 3,
    link: "Contact Us",
  },
  {
    id: 4,
    link: "Check symbols",
  },
];

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center bg-white z-[9999]">
      <nav className="max-w-[1400px] relative flex justify-between items-center w-full text-sm sm:text-base sm:px-4 py-[10px] px-2">
        <Link href="/" className="flex space-x-3">
          <Image
            alt="header text"
            src="/logo.svg"
            width={120}
            height={20.09}
            onClick={toggleMenu}
          />
        </Link>
        <ul className="hidden min-[900px]:flex menu text-[#05361E] gap-[40px] items-center">
          {links.map(({ link, id }) => (
            <li className="menu_link" key={id}>
              <Link href="/" className="font-Inter p-[8px] text-[14px]">
                {link}
              </Link>
            </li>
          ))}
          <li className="menu_link">
            <button className="border border-solid rounded-full py-[8px] px-[16px]">
              <Link href="/signup" className="font-Inter">
                Signup/Login
              </Link>
            </button>
          </li>
        </ul>
        <Image
          alt="header text"
          src={menu}
          width={30}
          height={32}
          onClick={toggleMenu}
          className="min-[900px]:hidden"
        />
        {toggle ? (
          <div className="menu w-full inline-block min-[900px]:hidden absolute left-0 top-[43px] px-3 bg-[#fff] pt-5 pb-5">
            <ul className="menu text-[#05361E] grid gap-[40px] items-center">
              {links.map(({ link, id }) => (
                <li className="menu_link" key={id}>
                  <Link href="/" className="font-Inter p-[8px] text-[14px]" onClick={toggleMenu}>
                    {link}
                  </Link>
                </li>
              ))}
              <li className="menu_link">
                <button className="border-2 border-solid rounded-[34px] py-[8px] px-[16px]">
                  <Link href="/signup" className="font-Inter" onClick={toggleMenu}>
                    Signup/Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
