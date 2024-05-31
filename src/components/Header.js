"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const hoverEffect =
    "hover:text-white hover:drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,1)]";

  return (
    <div className="w-[93%] md:w-[75%] mt-4 left-0 right-0 fixed p-2 mx-auto flex justify-between items-center bg-white/95 rounded border-solid border-2 border-black z-20">
      <Link href="/">
        <div className="logo flex px-4 gap-4 justify-between items-center w-[%50]">
            <Image src="/green-pulsar.png" alt="logo" width={140} height={100} />
        </div>
      </Link>
      <nav className="flex justify-center items-center gap-2">
        <ul className="hidden text-lg md:flex justify-between items-center gap-4 border-black border-r-2 p-2 ">
          <li>
            <Link href="/" className={hoverEffect}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={hoverEffect}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className={hoverEffect}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact" className={hoverEffect}>
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
