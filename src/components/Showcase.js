import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="showcase relative h-screen">
      <div className="">
        <div className="absolute left-18 top-[200px] md:left-40 md:top-1/2 transform -translate-y-[50%]">
          <Image src={"/green-pulsar2.png"} width={600} height={250} alt="" />
        </div>
        <div className="absolute top-[250px] md:top-[150px] md:right-[1000px]">
          <div id="object" className="object fixed md:w-[1050px] h-[500px]">
            <Spline scene="https://prod.spline.design/r-jlub9TfIL0Sl8y/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
