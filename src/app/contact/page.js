"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeContext } from "@/context/ThemeContext";
import ContactUsForm from "@/forms/contact-us";

const Contact = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="min-h-screen">
      <div
        className={`${
          mode == "light" ? "text-black" : "text-white"
        } max-w-[1240px] mx-auto pt-32 px-4 h-full`}
      >
        <h1 className="text-4xl font-bold py-4">Reach me through..</h1>
        <div className="py-10">
          <div
            className={` ${
              mode == "light" ? "bg-white/75" : "bg-black"
            } w-full p-6 rounded-md border-black border-2 leading-loose`}
          >
            <ul className="flex flex-col md:flex-row justify-between gap-8 lg:gap-0">
              <li className="flex justify-center items-center gap-2">
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
                    ghaithphoenix@protonmail.com
                  </Link>
                </span>
              </li>

              <li className="flex justify-center items-center gap-2">
                <FaLocationDot />
                <span className="contact-text place">Selangor, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <ContactUsForm mode={mode} />

        <div className="text-center">
          <Link href={"/"}>
            <button
              className={`${
                mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
              } p-2 rounded my-4 border-black border-2 text-white`}
            >
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
