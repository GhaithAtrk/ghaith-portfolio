"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="showcase relative h-screen">
      <div className="left-18 absolute top-[200px] -translate-y-[50%] transform md:left-40 md:top-1/2">
        <Image
          src={"/green-pulsar2.png"}
          width={600}
          height={250}
          alt=""
          className="w-auto"
        />
      </div>
      <div className="absolute left-[550px] top-[100px]">
        <div className="object fixed">
          <Spline scene="https://prod.spline.design/tHDN9PtoUWYagGJZ/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
