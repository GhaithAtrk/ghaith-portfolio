import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const MenuToggle = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className="block md:hidden border-[1px] border-black p-2 mx-1 rounded-full cursor-pointer"
      onClick={() => setOpenMenu(!openMenu)}
    >
      {openMenu ? (
        <MdArrowDropUp fontSize={20} />
      ) : (
        <MdArrowDropDown fontSize={20} />
      )}
      <div
        className="absolute top-[80px] left-1/2 transform -translate-x-1/2  bg-black/75 border-2 border-black text-white p-2 w-[320px] mx-auto"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <div className="absolute right-3">
          <IoCloseOutline fontSize={20} />
        </div>
        <div className="flex flex-col  h-full items-center text-[20px]">
          <Link href="/" className="py-2">
            Home
          </Link>
          <Link href="/projects" className="py-2">
            Projects
          </Link>
          <Link href="/about" className="py-2">
            About Me
          </Link>
          <Link href="/contact" className="py-2">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
