import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="showcase relative h-screen">
      <div className="absolute top-[200px] -translate-y-[50%] transform md:top-[50%] md:translate-x-[50%] z-10">
        <Image
          src={"/green-pulsar2.png"}
          width={600}
          height={250}
          alt=""
          className="w-auto"
        />
      </div>

      <Spline
        scene="https://prod.spline.design/r-jlub9TfIL0Sl8y/scene.splinecode"
        className="md:fixed"
      />
    </div>
  );
};

export default Showcase;
