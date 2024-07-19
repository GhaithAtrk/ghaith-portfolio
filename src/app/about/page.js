"use client";

import Cube from "@/components/Cube";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const About = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="h-screen">
      <div className="mx-4 flex h-full items-center justify-center pb-10 pt-32">
        <div
          className={` ${
            mode == "light" ? "bg-white/75" : "bg-black text-white"
          } relative my-4 h-full rounded-md border-2 border-black p-6 leading-loose md:w-[950px]`}
        >
          <div className="absolute right-10 top-10 sm:hidden md:block">
            <Cube />
          </div>
          <div className="md:max-w-[600px]">
            <h2 className="mb-4 text-4xl">My name is Ghaith.</h2>
            <div className="text-xl">
              <p>Developing webites is one of my interests in life.</p>
              <p>
                I also enjoy playing chess, soving riddles, indoor climbing and
                watching movies
              </p>
              <br />
              <p>
                I have started in Jan 2022 and i have been gaining the experince
                ever since then
              </p>
              <br />
              <p>
                React (Next.js) is what i use to build my projects and i always
                try to learn what is new in the field and keep myself up to date
              </p>
              <br />
              <p>
                I try to know learn about other concepts apart from web development
                for the sake of curiosity from time to time
              </p>
              <br />
              <p>
                I also care bout privacy and security and i hope to get in the
                field of cyber security one day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
