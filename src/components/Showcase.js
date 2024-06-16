"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="showcase relative h-screen">
      <div className="">
        <div className="absolute left-18 top-[200px] md:left-40 md:top-1/2 transform -translate-y-[50%]">
          <Image
            src={"/green-pulsar2.png"}
            width={600}
            height={250}
            alt=""
            className="w-auto"
          />

          {/* <h1 className="text-8xl capitalize">
            <span className="text-[#569C2B] stroke-black">Green</span>{" "}
            <span className="text-[#FFCF2C] stroke-black">Pulsar</span>
          </h1> */}
        </div>
        <div className="absolute top-[250px] md:top-[150px] md:right-[1000px]">
          <div id="object" className="object fixed md:w-[1050px] h-[500px]">
            <Spline scene="https://prod.spline.design/tHDN9PtoUWYagGJZ/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
