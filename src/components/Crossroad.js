import Image from "next/image";
import Link from "next/link";
import React from "react";

function Crossroad() {
  return (
    <div className="crossroad max-w-[1240px] my-10 relative mx-auto flex flex-col md:flex-row justify-around items-center">
      <Link href="/projects">
        <button className="glowing_btn green py-4 px-6 my-4 text-white rounded-md bg-green-400 shadow-[0_0_25px_rgba(190,254,195)]">
          My Projects
        </button>
      </Link>
      <Link href="/contact">
        <button className="glowing_btn orange py-4 px-6 my-4 text-white rounded-md bg-[#fbd02e] shadow-[0_0_25px_rgba(190,254,195)]">
          Contact Me
        </button>
      </Link>
    </div>
  );
}

export default Crossroad;
