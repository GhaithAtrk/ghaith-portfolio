import Image from "next/image";
import React from "react";

function Crossroad() {
  const componentData = [
    {
      img: "/green-pulsar2.png",
      title: "Checkout My Projects",
    },
    {
      img: "/green-pulsar2.png",
      title: "Reach Me Out",
    },
  ];

  return (
    <div className="crossroad max-w-[1240px] my-20 relative mx-auto flex flex-col md:flex-row justify-around ">
      {componentData.map((data) => (
        <div className="border-8 max-w-[300px] h-[250px] rounded-md border-[#C4873C] bg-[#fdc158] p-2 cursor-pointer flex flex-col items-center hover:scale-105 hover:translate-y-[-10px] transition duration-300 ease-in-out">
          <div className="bg-white ">
            <Image src={data.img} width={600} height={250} alt="" />
          </div>
          <div className="text-xl m-auto">{data.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Crossroad;
