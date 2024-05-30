import Image from "next/image";
import React from "react";

function Crossroad() {
  return (
    <div className="crossroad max-w-[1240px] my-20 relative mx-auto flex flex-col md:flex-row justify-around">
      <div className="border-8 flex-1 max-w-[300px] h-[200px] rounded-md border-[#C4873C] bg-[#fdc158] p-2 cursor-pointer">
        <div className="bg-white ">
          <Image src={"/green-pulsar2.png"} width={600} height={250} alt="" />
        </div>
        Checkout My Projects
      </div>
      {/* <div className="border-8 flex-1 max-w-[300px] rounded-md border-[#C4873C] bg-[#fdc158] p-2 cursor-pointer">
        <div className="bg-white p-1 rounded-sm w-full h-full text-center">
          Reach Me Out
        </div>
      </div> */}
    </div>
  );
}

export default Crossroad;
