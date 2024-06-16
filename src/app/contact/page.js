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
    <div className="relative min-h-screen">
      <div
        className={`${
          mode == "light" ? "text-black" : "text-white"
        } mx-auto h-full max-w-[1240px] px-4 pt-32`}
      >
        <h1 className="py-4 text-4xl">Reach me through..</h1>

        <div className="flex flex-col items-center justify-around gap-8 md:flex-row">
          <ContactUsForm mode={mode} />

          <div className="my-4 w-full md:w-[350px]">
            <div
              className={`h-[250px] rounded-md border-2 border-black bg-white/75 p-6 leading-loose`}
            >
              <ul className="flex h-full flex-col items-start justify-evenly">
                <li className="contact-item flex items-center justify-center gap-2">
                  <Link href="tel:1-212-555-5555" title="Give me a call">
                    <div
                      className={`${
                        mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
                      } my-4 cursor-pointer rounded border-2 border-black p-2 text-white`}
                    >
                      <FaPhone />
                    </div>
                  </Link>
                  <span className="contact-text phone">
                    <Link href="tel:1-212-555-5555" title="Give me a call">
                      +6017-6323-261
                    </Link>
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2">
                  <Link href="mailto:#" title="Send me an email">
                    <div
                      className={`${
                        mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
                      } my-4 cursor-pointer rounded border-2 border-black p-2 text-white`}
                    >
                      <MdEmail />
                    </div>
                  </Link>
                  <span className="contact-text gmail">
                    <Link href="mailto:#" title="Send me an email">
                      ghaithphoenix@protonmail.com
                    </Link>
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2">
                  <div
                    className={`${
                      mode == "light" ? "bg-[#C4873C]" : "bg-gray-600"
                    } my-4 cursor-pointer rounded border-2 border-black p-2 text-white`}
                  >
                    <FaLocationDot />
                  </div>
                  <span className="contact-text place">Selangor, Malaysia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
