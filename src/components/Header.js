"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const navItem = ''

  return (
    <div className="w-[93%] md:w-[75%] mt-4 left-0 right-0 fixed p-2 mx-auto flex justify-between items-center bg-white/95 rounded border-solid border-2 border-black z-20">
      <Link href="/">
        <div className="logo flex px-4 gap-4 justify-between items-center">
            <Image src="/green-pulsar.png" alt="logo" width={100} height={60} className="w-auto" />
        </div>
      </Link>
      <nav className="flex justify-center items-center gap-2">
        <ul className="hidden text-lg md:flex justify-between items-center gap-4 border-black border-r-2 p-2 ">
          <li>
            <Link href="/" className={navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={navItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className={navItem}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact" className={navItem}>
              Contact Me
            </Link>
          </li>
        </ul>
        <ModeToggle />
        <MenuToggle />
      </nav>
    </div>
  );
};

export default Header;
