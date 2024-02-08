"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const About = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full mx-4 pt-32 pb-10">
        <div
          className={` ${
            mode == "light" ? "bg-white/75" : "bg-black text-white"
          } md:w-[650px]  my-4 p-6 rounded-md border-black border-2 leading-loose `}
        >
          <h2 className="text-4xl mb-4">My name is Ghaith.</h2>
          <div className="text-xl">
            <p>Developing webites is one of my interests in life.</p>
            <p>
              I also enjoy playing chess, soving riddles, indoor climbing and
              watching movies
            </p>
            <br />
            <p>
              I have started in Jan 2020 and i have been gaining the experince ever
              since then
            </p>
            <br />
            <p>
              React (Next.js) is what i use to build my projects and i always
              try to learn what is new in the field and keep myself up to date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
