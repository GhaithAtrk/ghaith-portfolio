"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

import Spline from "@splinetool/react-spline";

const Learning = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="learning max-w-[1240px] relative mx-auto flex flex-col justify-center h-screen">
      <h2 className="text-4xl my-4 font-bold text-center md:text-left">
        What Am I Learning Currently?
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div
          className={`bg-white/85 h-[300px] w-[90%] md:w-[500px] p-6 rounded-md border-black border-2 leading-loose`}
        >
          <h2 className="text-center text-4xl mb-4">Nest.js</h2>
          <p className="text-center text-xl leading-10">
            On my way to become a full-stack web developer, choosing Nest.js as
            a my backend framework since it is efficient, reliable and scalable
          </p>
        </div>

        <div className="md:w-[500px] h-[500px]">
        <Spline scene="https://prod.spline.design/RtNKUIjyI4f0ujvn/scene.splinecode" />
          </div>
      </div>
    </div>
  );
};

export default Learning;
