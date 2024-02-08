"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeContext } from "@/context/ThemeContext";

const Contact = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="max-w-[1240px] mx-auto lg:h-screen pt-32 px-4">
      <div
        className={`${
          mode == "light" ? "text-black" : "text-white"
        } h-full`}
      >
        <h1 className="text-4xl font-bold py-4">
          For now you can reach me through..
        </h1>
        <div className="py-20">
          <div
            className={` ${
              mode == "light" ? "bg-white/75" : "bg-black"
            } w-full  my-4 p-6 rounded-md border-black border-2 leading-loose`}
          >
            <ul className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
              <li className="flex justify-start lg:justify-center items-center gap-2">
                <FaPhone />
                <span className="contact-text phone">
                  <Link href="tel:1-212-555-5555" title="Give me a call">
                    +6017-6323-261
                  </Link>
                </span>
              </li>

              <li className="flex justify-center items-center gap-2">
                <MdEmail />
                <span className="contact-text gmail">
                  <Link href="mailto:#" title="Send me an email">
                    ghaithatrk93@gmail.com
                  </Link>
                </span>
              </li>

              <li className="flex justify-end lg:justify-center items-center gap-2">
                <FaLocationDot />
                <span className="contact-text place">Selangor, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-4 text-gray-400">
          (more to be added later)
        </p>
        <div className="text-center">
          <Link href={"/"}>
            <button className="bg-[#C4873C] p-2 rounded my-4 border-black border-2 text-white">
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
